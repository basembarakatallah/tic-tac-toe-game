import { Left } from "../../utils/icons.util";
import { Right } from "../../utils/icons.util";

export const GameOver = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-background rounded-full">
      <div className="w-96 h-128 bg-[#2B0040] rounded-2xl">
        <div className="w-56 h-16 relative top-12 left-20 flex justify-between">
          <div className="w-16 bg-playerO rounded-lg font-medium">
            <div className="text-center">Player X</div>
            <div className="text-center">0</div>
          </div>
          <div className="w-16 bg-[#BCDBF9] rounded-lg font-medium ">
            <div className="text-center">Draw</div>
            <div className="text-center">0</div>
          </div>
          <div className="w-16 bg-playerX rounded-lg font-medium">
            <div className="text-center">Player Y</div>
            <div className="text-center">0</div>
          </div>
        </div>
        <div className="w-56 h-56 grid grid-cols-3 grid-rows-3 gap-3 relative top-20 left-20">
          <button className="bg-[#43115B] rounded-lg text-5xl text-[#48D2FE]">X</button>
          <button className="bg-[#43115B] rounded-lg text-5xl text-[#E2BE00]">O</button>
          <button className="bg-[#43115B] rounded-lg text-5xl"></button>
          <button className="bg-[#43115B] rounded-lg text-5xl"></button>
          <button className="bg-[#43115B] rounded-lg text-5xl text-[#E2BE00]">O</button>
          <button className="bg-[#43115B] rounded-lg text-5xl"></button>
          <button className="bg-[#43115B] rounded-lg text-5xl"></button>
          <button className="bg-[#43115B] rounded-lg text-5xl text-[#E2BE00]">O</button>
          <button className="bg-[#43115B] rounded-lg text-5xl"></button>
        </div>
        <div className="relative top-28 left-14"><Left /></div>
        <div className="relative top-16 left-72"><Right /></div>
        <div className="w-56 p-2 relative top-2 left-20 text-white text-center font-medium bg-[#099C3B]">
          Game Over. o
        </div>
      </div>
      <div className='w-64 h-48 absolute bottom-32 left-0 flex flex-col text-9xl leading-10 text-playerX hidden lg:flex'>
        tic.<span className="text-playerO">tac.</span>toe.
      </div>
    </div>
  );
};
