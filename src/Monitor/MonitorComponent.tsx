import React from "react";

type PropsType = {
  bgColor: string;
  handleClick: () => void;
  isFail: boolean;
  reactTime: number;
  handleRegame: () => void;
};

export default function MonitorComponent({
  bgColor,
  handleClick,
  isFail,
  reactTime,
  handleRegame,
}: PropsType) {
  return (
    <>
      <div
        className='md:w-[50%] w-[80%] bg-white rounded-2xl h-[50vw] md:h-[40%] flex items-center justify-center font-bold'
        style={{
          backgroundColor: bgColor,
          color: bgColor === "white" ? "black" : "white",
        }}
        onClick={handleClick}
      >
        <h1 className='md:text-3xl uppercase tracking-widest'>
          {bgColor === "white" && "🚀 Read!!!!"}
          {bgColor !== "white" && !reactTime && !isFail && "🔥 Green Click!"}
          {reactTime ? "😃 Success!!!" : ""}

          {isFail && "🥲 Failed..."}
        </h1>
      </div>
      {reactTime ? (
        <>
          <h1 className='mt-5 text-2xl text-white font-bold'>
            {reactTime} m/s
          </h1>
        </>
      ) : (
        ""
      )}

      {isFail || reactTime ? (
        <button
          className='px-3 py-2 hover:bg-slate-400 bg-slate-500 rounded-lg mt-5 text-white font-bold'
          onClick={handleRegame}
        >
          Regame
        </button>
      ) : (
        ""
      )}
    </>
  );
}
