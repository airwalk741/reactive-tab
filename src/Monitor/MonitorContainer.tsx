import React, { useEffect, useRef, useState } from "react";
import MonitorComponent from "./MonitorComponent";

type PropsType = {};

let startedTime = 0;

const sleep = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms * 100));
};

export default function MonitorContainer({}: PropsType) {
  const game = useRef(true);
  const [bgColor, setBgColor] = useState("white"); // 준비~
  const [isFail, setIsFial] = useState(false); // 보라 클릭하면 실패
  const [reactTime, setReactTime] = useState(0);

  useEffect(() => {
    if (game.current) {
      // 10 <= x <= 20
      const randomTime = Math.floor(Math.random() * 20) + 10;

      // 배경 바꾸기
      const changeBg = async (randomTime: number) => {
        await sleep(randomTime);
        if (game.current) {
          const randomTime = Math.floor(Math.random() * 20) + 15;
          if (randomTime % 2) {
            startedTime = new Date().getTime();
            setBgColor("#78C79D");
            changeBg(randomTime);
          } else {
            setBgColor("#B5B0F2");
            changeBg(randomTime);
          }
        }
      };

      changeBg(randomTime);
    }
  }, [game.current]);

  const handleClick = () => {
    if (!game.current) return;
    if (bgColor === "white") return;

    if (bgColor === "#78C79D") {
      setIsFial(false);
      setReactTime(new Date().getTime() - startedTime);
    } else {
      setBgColor("#FF7AAB");
      setIsFial(true);
    }
    game.current = false;
  };

  // 게임 바시 시작
  const handleRegame = () => {
    setReactTime(0);
    setIsFial(false);
    setBgColor("white");
    game.current = true;
  };

  return (
    <>
      <MonitorComponent
        bgColor={bgColor}
        handleClick={handleClick}
        isFail={isFail}
        reactTime={reactTime}
        handleRegame={handleRegame}
      />
    </>
  );
}
