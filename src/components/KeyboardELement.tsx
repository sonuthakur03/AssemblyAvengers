import { clsx } from "clsx";
import type { JSX } from "react";

interface KeyboardELementProps {
  guessedLetters: string[];
  currentWord: string;
  isGameOver: boolean;
  addguessedLetters(value: string): void;
}

const KeyboardELement = ({
  guessedLetters,
  currentWord,
  isGameOver,
  addguessedLetters,
}: KeyboardELementProps): JSX.Element => {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElement = [...alphabet].map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const isButtonDisabled = isGameOver || isGuessed;
    const classname: string = clsx(
      "flex-box rounded-md h-[50px] w-[50px] border-2 border-white",

      {
        "bg-[#FCBA29]": !isGuessed,

        "bg-green-500": isCorrect,

        "bg-red-500 ": isWrong,

        "opacity-50 cursor-not-allowed": isButtonDisabled,
      },
    );

    return (
      <button
        key={letter}
        value={letter}
        onClick={() => addguessedLetters(letter)}
        className={classname}
        disabled={isButtonDisabled}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <section className="flex-box flex-wrap w-[80%] gap-2 font-bold text-[#1E1E1E] text-xl p-8">
      {keyboardElement}
    </section>
  );
};

export default KeyboardELement;
