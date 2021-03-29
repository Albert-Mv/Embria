import React, { SetStateAction, useState } from "react";
import s from "./Header.scss";

type HeaderProps = {
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
  streams: number[];
  playStream: (streamId: number)=>void ;
  stopStream: ()=>void;
};

const Header = ({ isPlaying, setIsPlaying, streams, playStream, stopStream }: HeaderProps) => {
  const [streamId, setStreamId] = useState<number>(streams[0]);

  return (
    <div className={s.header}>
      <img
        src={
          "https://habrastorage.org/getpro/moikrug/uploads/company/100/004/389/5/logo/medium_1f607c4a007042306fc38030ff7ac15d.png"
        }
        alt={"Embria streaming!"}
      />
      <span className={s.headerTitle}>{"Embria"}</span>
      <span className={`${s.headerTitle} ${s.headerTitleEnd}`}>
        &nbsp;{"streaming"}
      </span>
      <div className={s.headerMenu}>
        <select disabled={isPlaying} onChange={(e) => setStreamId(Number(e.target.value))}>
          {streams.map((item) => (
            <option key={item} value={item}>{`Поток ${item}`}</option>
          ))}
        </select>
        <button className={s.btn} onClick={()=>{
          setIsPlaying(prev=>!prev)
          if (!isPlaying) {
            playStream(streamId);
          } else {
            stopStream();
          }
        }}>
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Header;
