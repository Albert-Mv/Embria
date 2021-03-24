import React, { useState } from "react";
import s from "./VideoViewer.scss";

type VideoViewerProps = {
    isActive: boolean
};

const VideoViewer = ({isActive}: VideoViewerProps) => {

  return (
    <div className={s.videoViewer}>
      {isActive && (
        <iframe
          className={s.videoFrame}
          src="https://www.youtube.com/embed/LHMwHkmhCMc"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
      
    </div>
  );
};

export default VideoViewer;

//wss://ms-web.arcademy.live:8989
