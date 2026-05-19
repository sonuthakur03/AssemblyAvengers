import type { JSX } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface NewGameButtonProps {
  isGameOver: boolean;
  setNewGame(): void;
  isGameWon: boolean;
}

const NewGameButton = ({
  isGameOver,
  setNewGame,
  isGameWon,
}: NewGameButtonProps): JSX.Element => {
  const { width, height } = useWindowSize();
  return (
    <>
      {isGameOver && (
        <button
          className="border border-[#D7D7D7] py-4 px-20 rounded-md bg-[#11B5E5] text-black text-xl font-bold"
          onClick={setNewGame}
        >
          New Game
        </button>
      )}
      {isGameWon && (
        <Confetti width={width} height={height} numberOfPieces={1000} />
      )}
    </>
  );
};

export default NewGameButton;
