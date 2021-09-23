import { useCallback, useRef, useState } from "react";
import BackToHome from "../components/BackToHome";
import DicePlayer from "../components/DicePlayer";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Die1 from "../assets/images/dieFaces/Die1.svg";
import Die2 from "../assets/images/dieFaces/Die2.svg";
import Die3 from "../assets/images/dieFaces/Die3.svg";
import Die4 from "../assets/images/dieFaces/Die4.svg";
import Die5 from "../assets/images/dieFaces/Die5.svg";
import Die6 from "../assets/images/dieFaces/Die6.svg";
const faceList = [Die1, Die2, Die3, Die4, Die5, Die6];

const Dice = () => {
  const [lock, setLock] = useState(false);
  const inputNP = useRef();
  const [numberOfPlayers, setNumberOfPlayers] = useState([1]);
  const lockFunction = () => {
    setLock(true);
    let tempNP = [];
    if (inputNP.current.value > 10) {
      inputNP.current.value = 10;
      tempNP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    } else if (inputNP.current.value < 1) {
      inputNP.current.value = 1;
      tempNP = [1];
    } else for (let i = 1; i <= inputNP.current.value; i++) tempNP.push(i);
    setNumberOfPlayers(tempNP);
  };
  const resetFunction = () => {
    setLock(false);
    inputNP.current.value = 1;
    setNumberOfPlayers([1]);
  };
  const getFace = useCallback((firstLoad) => {
    if (firstLoad) return faceList[0];
    const face = Math.floor(Math.random() * 6);
    return faceList[face];
  }, []);

  return (
    <DefaultLayout>
      <BackToHome />
      <h1 className="text-3xl">Dice Game</h1>
      <div className="flex flex-col items-center">
        <div>
          <label className="mr-3">Enter Number of Players:</label>
          <input
            className="text-black w-10"
            type="number"
            min="1"
            max="10"
            disabled={lock ? "disabled" : ""}
            ref={inputNP}
          />
        </div>
        <div>
          <button
            onClick={lockFunction}
            className="h-16 w-16 p-3 m-3 hover:bg-red-700 transition rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </button>
          <button
            onClick={resetFunction}
            className="h-16 w-16 p-3 m-3 hover:bg-red-700 transition rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-3">
        {numberOfPlayers.map((n) => (
          <DicePlayer
            key={"player" + n}
            playerTitle={"Player " + n}
            getFace={getFace}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Dice;
