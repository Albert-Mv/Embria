import React, { SetStateAction } from "react";
import useRequest from "../../hooks/useRequest";
import s from "./Header.scss";


type HeaderProps = {
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
  setStream: React.Dispatch<React.SetStateAction<number>>;
  streams: number[];
  stream: number;
};

const Header = ({ setIsActive, setStream, streams, stream }: HeaderProps) => {
  const [requestApi, { isLoading }] = useRequest();

  const buildRequest = (body: object): Request => {
    const request = new Request("/api", {
      method: "POST",
      body: JSON.stringify({
        ...body,
      }),
      headers: {
        ["Content-Type"]: "application/json",
      },
    });
    return request;
  };

  const connectButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsActive(true);
    const request = buildRequest({
      method: "connect",
    });
    requestApi(request, console.log);
  };

  const enableStream = () => {
    const request = buildRequest({
      method: "enableStream",
      data: {
        stream,
      },
    });
    requestApi(request, console.log);
  };

  const disableStream = () => {
    const request = buildRequest({
      method: "enablePoint",
      data: {
        stream,
      },
    });
    requestApi(request, console.log);
  };

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
        <select onChange={(e) => setStream(Number(e.target.value))}>
          {streams.map((item) => (
            <option key={item} value={item}>{`Поток ${item}`}</option>
          ))}
        </select>
        <button className={s.btn} onClick={connectButtonHandler}>
          {"Connect"}
        </button>
        <button className={s.btn} onClick={() => setIsActive(false)}>
          {"Disconnect"}
        </button>
        <button className={s.btn} onClick={enableStream}>
          {"List"}
        </button>
      </div>
    </div>
  );
};

export default Header;
