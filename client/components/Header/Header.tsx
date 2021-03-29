import React, { SetStateAction } from "react";
import useRequest from "../../hooks/useRequest";
import s from "./Header.scss";

type HeaderProps = {
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
  setStreamId: React.Dispatch<React.SetStateAction<number>>;
  streams: number[];
};

const Header = ({ isPlaying, setIsPlaying, setStreamId, streams }: HeaderProps) => {
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
        }}>
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default Header;
