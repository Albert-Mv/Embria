import React, { createRef, useEffect } from "react";
import s from "./VideoViewer.scss";
import Janus from "janus-gateway-js";

type VideoViewerProps = {
  isPlaying: boolean;
  streamId: number;
};

const VideoViewer = ({ isPlaying, streamId }: VideoViewerProps) => {
  const ref: React.RefObject<HTMLVideoElement> = createRef();

  let janusConnection;
  let janusSession;
  let streamingPlugin;
  let mountpoint;

  let janus = new Janus.Client("wss://ms-web.arcademy.live:8989", {
    keepalive: "true",
  });

  janus
    .createConnection("client")
    .then(function (connection) {
      janusConnection = connection.createSession();
      console.log("Session created: ", janusConnection);

      return janusConnection;
    })
    .then(function (session) {
      janusSession = session.attachPlugin("janus.plugin.streaming");
      console.log("The plugin attached to session");

      return janusSession;
    })
    .then(function (plugin) {
      streamingPlugin = plugin;
      streamingPlugin.on("pc:track:remote", function (event) {
        ref.current.srcObject = event.streams[0];
      });

      return streamingPlugin;
    })
    .catch(console.log);

  const connectToMountpoint = (): Promise<any> => {
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

  const disconnectFromMountpoint = (): Promise<any> => {
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

  const playStream = () => {
    connectToMountpoint().then(startStreaming).catch(console.log);
  };

  const stopStream = () => {
    disconnectFromMountpoint().then(stopStreaming).catch(console.log);
  };

  return (
    <div className={s.videoViewer}>
      {isPlaying && (
        <video ref={ref} controls autoPlay className={s.videoFrame}></video>
      )}
      
    </div>
  );
};

export default VideoViewer;
