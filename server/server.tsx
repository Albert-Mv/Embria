import express from "express";
import path from "path";
import fs from "fs";
import websocket from "websocket";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";
import { CustomRequest, RequestTypes } from "./types";

const port = 3000;
const app = express();
const router = express.Router();
const __dirname = path.resolve();
const host = "ms-web.arcademy.live:8989";

app.use(express.json());

const client = new websocket.client();
let sessionId: number | undefined = undefined;
let handleId: number | undefined = undefined;
let activePoint: number | undefined = undefined;
let serverRequest = new CustomRequest();

const setServerRequest = (type: RequestTypes, data: object): void => {
  serverRequest.request = JSON.stringify(data);
  serverRequest.type = type;
};

const clearServerRequest = (): void => {
  serverRequest.type = RequestTypes.NONE;
  serverRequest.request = "";
};

client.connect(`wss://${host}`, "janus-protocol");

client.on("connectFailed", function (error) {
  console.log("Connect Error: " + error.toString());
});

client.on("connect", function (connection) {
  console.log("WebSocket Client Connected");

  connection.on("error", function (error) {
    console.log("Connection Error: " + error.toString());
  });

  connection.on("close", function () {
    console.log("echo-protocol Connection Closed");
  });

  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received: '" + message.utf8Data + "'");
      handleResponse(connection, JSON.parse(message.utf8Data!));

    } else {
      console.log(message);
    }
  });

  function sendMessage() {
    console.log(serverRequest)
    if (connection.connected && serverRequest.type) {
      console.log(serverRequest);
      connection.sendUTF(serverRequest.request);
    }
    setTimeout(sendMessage, 5000);
  }

  sendMessage();
});

const enablePoint = () => {
  setServerRequest(RequestTypes.ENABLE_POINT, {
    janus: "message",
    session_id: sessionId,
    handle_id: handleId,
    transaction: uuidv4(),
    body: {
      request: "enable",
      id: activePoint,
    }
  });
};

const enableStream = () => {
  activePoint && setServerRequest(RequestTypes.ENABLE_STREAM, {
    janus: "message",
    session_id: sessionId,
    handle_id: handleId,
    transaction: uuidv4(),
    body: {
      request: "watch",
      id: activePoint,
    }
  });
};

const startStream = () => {
  setServerRequest(RequestTypes.START_STREAM, {
    janus: "message",
    session_id: sessionId,
    handle_id: handleId,
    transaction: uuidv4(),
    body: {
      request: "start",
    }
  });
}

const handleResponse = (connection: websocket.connection, data: any): void => {
  switch (serverRequest.type) {
    case RequestTypes.CONNECT_TO_SERVER:
      {
        sessionId = data?.data?.id;
        if (sessionId) {
          setServerRequest(RequestTypes.CONNECT_TO_STREAMING_PLUGIN, {
            janus: "attach",
            session_id: sessionId,
            plugin: "janus.plugin.streaming",
            transaction: uuidv4(),
          });
          connection.sendUTF(serverRequest.request);
        } else {
          throw new Error("Connection to the server failed");
        }
      }
      break;
    case RequestTypes.CONNECT_TO_STREAMING_PLUGIN:
      {
        handleId = data?.data?.id;
        if (handleId) {
          clearServerRequest();
        } else {
          throw new Error("Can't to attach the streaming plugin");
        }
      }
      break;
    case RequestTypes.ENABLE_POINT:
      {
        if (data?.plugindata?.data?.streaming !== "ok") {
          throw new Error("Can't enable point")
        }
        enableStream()
      }
      break;
    case RequestTypes.ENABLE_STREAM:
      {
        if(data?.plugindata?.data?.result?.status === "preparing") {
          startStream()
        }
      }
      break;
      case RequestTypes.START_STREAM:
      {
        if(data?.plugindata?.data?.result?.status === "starting") {
          clearServerRequest();
        }
      }
      break;
    default:
  }
};

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve(__dirname, "build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    res.set("Content-Type", "text/html");
    if (err) {
      console.log(err);
      return res
        .status(500)
        .send(
          "Something error happened. Try go to home page or visit us later!"
        );
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

const checkBody = (req: any): void => {
  if (!Object.keys(req.body).length) {
    throw new Error("Unknown format of request's body");
  }
};

router.post("/api", (req, res) => {
  checkBody(req);
  const {
    method,
  } = req.body;
  switch (method) {
    case "connect":
      {
        setServerRequest(RequestTypes.CONNECT_TO_SERVER, {
          janus: "create",
          transaction: uuidv4(),
        });
      }
      break;
    case "enableStream":
      {
        const { data: { stream } } = req.body;
        if (sessionId && handleId && stream) {
          activePoint = stream;
          enablePoint();
        }
      }
      break;
    default:
      throw new Error("Unknown method:" + method);
  }
});

app.use("/", router);

app.listen(port, () => {
  console.log(`⚡️[server]: App have been started at port ${port}`);
});
