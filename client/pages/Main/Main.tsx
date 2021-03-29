import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../../components/Header/Header";
import VideoViewer from "../../components/VideoViewer/VideoViewer";
import Janus from "janus-gateway-js";
import s from "./Main.scss";

const Main = () => {
  const videoRef: React.RefObject<HTMLVideoElement> = React.useRef(null);
  const streams: number[] = [100, 101];
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  let janusConnection: any;
  let janusSession: any;
  let streamingPlugin: any;
  let mountpoint: any;
  let janus: any;

  useEffect(() => {
    janus = new Janus.Client("wss://ms-web.arcademy.live:8989", {
      keepalive: "true",
    });

    janus
      .createConnection("client")
      .then(function (connection: any) {
        janusConnection = connection.createSession();
        console.log("Session created: ", janusConnection);

        return janusConnection;
      })
      .then(function (session: any) {
        janusSession = session.attachPlugin("janus.plugin.streaming");
        console.log("The plugin attached to session");

        return janusSession;
      })
      .then(function (plugin: any) {
        streamingPlugin = plugin;
        console.log("List", streamingPlugin.list());
        streamingPlugin.on("pc:track:remote", function (event: any) {
          videoRef!.current!.srcObject = event.streams[0];
        });

        return streamingPlugin;
      })
      .catch(console.log);
  }, [videoRef.current])

  const connectToMountpoint = (streamId: number): Promise<any> => {
    const mountOptions = {
      type: "live",
      audio: true,
      video: true,
    };

    return streamingPlugin
      .enable(streamId, mountOptions)
      .then(function () {
        mountpoint = streamingPlugin.connect(streamId);
        console.log("Mountpoint ", mountpoint, " connected");
        return mountpoint;
      })
      .catch(console.log);
  };

  const disconnectFromMountpoint = (streamId: number): Promise<any> => {
    return streamingPlugin.destroy(streamId);
  };

  const startStreaming = () => {
    mountpoint
      .then(function () {
        streamingPlugin.start();
        console.log("Stream started");
      })
      .catch(console.log);
  };

  const stopStreaming = () => {
    mountpoint
      .then(function () {
        streamingPlugin.stop();
        console.log("Stream stopped");
      })
      .catch(console.log);
  };

  const playStream = (streamId: number) => {
    connectToMountpoint(streamId).then(startStreaming).catch(console.log);
  };

  const stopStream = (streamId: number) => {
    disconnectFromMountpoint(streamId).then(stopStreaming).catch(console.log);
  };

  return (
    <div className={s.mainContainer}>
      <Header
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        streams={streams}
        playStream={playStream}
        stopStream={stopStreaming}
      />
      <VideoViewer isPlaying={isPlaying} ref={videoRef} />
    </div>
  );
};

export default Main;
