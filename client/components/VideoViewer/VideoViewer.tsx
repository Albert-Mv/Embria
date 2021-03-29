import React from "react";
import s from "./VideoViewer.scss";

type VideoViewerProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  isPlaying: boolean;
};

const VideoViewer = React.forwardRef<HTMLVideoElement, VideoViewerProps>(({ isPlaying }, ref) => {
  return (
    <div className={s.videoViewer}>
      {isPlaying && (
        <video ref={ref} controls autoPlay className={s.videoFrame}></video>
      )}
      
    </div>
  );
});

export default VideoViewer;
