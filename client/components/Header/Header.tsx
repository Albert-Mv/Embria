import React, { SetStateAction } from 'react';
import s from './Header.scss';

type HeaderProps = {
    setIsActive: React.Dispatch<SetStateAction<boolean>>,
    setStream: React.Dispatch<React.SetStateAction<number>>,
    streams: number[]
}

const Header = ({setIsActive, setStream, streams}: HeaderProps) => {
    return (
        <div className={s.header}>
            <img src={'https://habrastorage.org/getpro/moikrug/uploads/company/100/004/389/5/logo/medium_1f607c4a007042306fc38030ff7ac15d.png'} alt={'Embria streaming!'} />
            <span className={s.headerTitle}>{'Embria'}</span>
            <span className={`${s.headerTitle} ${s.headerTitleEnd}`}>&nbsp;{'streaming'}</span>
            <div className={s.headerMenu}>
            <select onChange={(e)=>setStream(Number(e.target.value))}>
                {streams.map(item => (
                    <option key={item} value={item}>{`Поток ${item}`}</option>
                ))}
            </select>
            <button
                className={s.btn}
                onClick={() => setIsActive(true)}
            >
                {"Connect"}
            </button>
            <button
                className={s.btn}
                onClick={() => setIsActive(false)}
            >
                {"Disconnect"}
            </button>
            </div>
        </div>
    );
};

export default Header;