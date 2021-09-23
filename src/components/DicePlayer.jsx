import { useEffect, useState } from "react";

const DicePlayer = ({ playerTitle, getFace }) => {
  const [dieFace, setDieFace] = useState();
  const rollDice = () => {
    setDieFace(getFace());
  };
  useEffect(() => {
    setDieFace(getFace(true));
  }, [setDieFace, getFace]);
  return (
    <div className="flex flex-col items-center max-w-48 p-2">
      <h1>{playerTitle}</h1>
      <div className="w-24">
        <img src={dieFace} alt="Random Die Face" />
      </div>
      <button
        className="hover:bg-red-500 p-1 rounded-lg transition"
        onClick={rollDice}
      >
        Roll Dice
      </button>
    </div>
  );
};

export default DicePlayer;
