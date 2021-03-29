import React from "react";
import s from "./VideoViewer.scss";

type VideoViewerProps = {
  isPlaying: boolean;
};

const VideoViewer = React.forwardRef(({ isPlaying }: VideoViewerProps, ref: React.LegacyRef<HTMLVideoElement>) => {

  return (
    <div className={s.videoViewer}>
      {isPlaying && (
        <video ref={ref} controls autoPlay className={s.videoFrame}></video>
      )}
      
    </div>
  );
});

export default VideoViewer;
