import { clsx } from "clsx";
import type { JSX } from "react";

interface WordElementProps {
  currentWord: string;
  guessedLetters: string[];
  isGameLost: boolean;
}

const WordElement = ({
  currentWord,
  guessedLetters,
  isGameLost,
}: WordElementProps): JSX.Element => {
  const wordElement: JSX.Element[] = [...currentWord].map(
    (letter: string, index: number): JSX.Element => {
      const isGuessed: boolean = guessedLetters.includes(letter);
      const isRevealed: boolean = isGuessed || isGameLost;

      const isMissed: boolean = isGameLost && !isGuessed;

      return (
        <div
          key={index}
          className={clsx(
            "flex-box rounded-sm h-[50px] w-[50px] border-b-2 transition-colors",

            // 1. Still hidden (Game active & not guessed)
            !isRevealed && "bg-[#323232] border-white",

            // 2. Correct (Guessed by user)
            isGuessed && "bg-[#4a4a4a] border-green-400 text-green-400",

            // 3. Missed (Game over & not guessed)
            isMissed && "bg-[#4a4a4a] border-red-800 text-red-400",
          )}
        >
          {isRevealed ? letter.toUpperCase() : ""}
        </div>
      );
    },
  );
  return (
    <section className="flex-box gap-1 text-white text-2xl font-black">
      {wordElement}
    </section>
  );
};

export default WordElement;
