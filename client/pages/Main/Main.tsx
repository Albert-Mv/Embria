import React, { useState } from "react";
import Header from "../../components/Header/Header";
import VideoViewer from "../../components/VideoViewer/VideoViewer";
import s from "./Main.scss";

const Main = () => {
  const streams: number[] = [102, 103];
  const [streamId, setStreamId] = useState<number>(streams[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className={s.mainContainer}>
      <Header
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setStreamId={setStreamId}
        streams={streams}
      />
      <VideoViewer isPlaying={isPlaying} streamId={streamId} />
    </div>
  );
};

export default Main;
