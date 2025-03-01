import { useState } from "react";

export const NewGame = () => {
  const game = ['','','','','','','','',''];
  var [score, setScore] = useState(0);
  const [winner, setWinner] = useState('');
  const [Xmove, setXmove] = useState('');
  const [Omove, setOmove] = useState('');
  const [newGame, setNewGame] = useState(0);
  const [reset, setReset] = useState(0);
  function handleScore() {
    if(game[0] === 'X' && game[1] === 'X' && game[2] === 'X')
      setScore(score++);
  }
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
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
          <button className="bg-[#43115B] rounded-lg"></button>
        </div>
        <button className="w-64 p-2 rounded relative top-24 left-16 font-medium bg-[#F4F6F5]">
          New Game
        </button>
        <button className="w-64 p-2 rounded relative top-28 left-16 font-medium bg-[#F4F6F54A] text-white">
          Reset Score
        </button>
      </div>
      <div className='w-64 h-48 absolute bottom-32 left-0 flex flex-col text-9xl leading-10 text-playerX hidden lg:flex'>
        tic.<span className="text-playerO">tac.</span>toe.
      </div>
    </div>
  );
};
