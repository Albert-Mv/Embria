import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";

const port = 3000;
const app = express();
const __dirname = path.resolve();

app.use(express.json());

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

app.listen(port, () => {
  console.log(`⚡️[server]: App have been started at port ${port}`);
});
