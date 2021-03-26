import React, { useState } from "react";
import Header from '../../components/Header/Header';
import VideoViewer from "../../components/VideoViewer/VideoViewer";
import s from './Main.scss';

const Main = () => {
  const streams: number[] = [100, 101];
  const [isActive, setIsActive] = useState<boolean>(false);
  const [stream, setStream] = useState<number>(streams[0]);

  return (
    <div className={s.mainContainer}>
      <Header setIsActive={setIsActive} setStream={setStream} streams={streams} stream={stream}/>
      <VideoViewer isActive={isActive} />
    </div>
  );
};

export default Main;
