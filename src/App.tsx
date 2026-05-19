import { useState } from "react";
import { languages } from "./languages";
import { getFarewellText, getCurrentWord } from "./utils";
import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import LangaugeELement from "./components/LangaugeELement";
import WordElement from "./components/WordElement";
import KeyboardELement from "./components/KeyboardELement";
import NewGameButton from "./components/NewGameButton";
import type { Language } from "./languages";

function App() {
  // state variables
  const [currentWord, setCurrentWord] = useState<string>((): string =>
    getCurrentWord(),
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // derived variables
  const wrongGuessCount: number = guessedLetters.filter(
    (letter: string): boolean => ![...currentWord].includes(letter),
  ).length;
  const isGameLost: boolean = wrongGuessCount >= languages.length - 1;
  const isGameWon: boolean = [...currentWord].every((letter: string): boolean =>
    guessedLetters.includes(letter),
  );
  const isGameOver: boolean = isGameLost || isGameWon;
  const lastGuessedLetter: string = guessedLetters[guessedLetters.length - 1];
  const isLastGuessedLetterWrong: boolean | string =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const lostLanguage: Language = languages[wrongGuessCount - 1];

  const farewellMsg: string =
    isLastGuessedLetterWrong && lostLanguage
      ? getFarewellText(lostLanguage.name)
      : "";

  // static variables
  const addguessedLetters = (value: string): void => {
    setGuessedLetters((prevArr: string[]): string[] => {
      return prevArr.includes(value) ? prevArr : [...prevArr, value];
    });
  };
  const setNewGame = (): void => {
    setCurrentWord(getCurrentWord());
    setGuessedLetters([]);
  };

  console.log(currentWord);

  return (
    <main className="flex-box flex-col mt-8 gap-8 w-[60%] mx-auto">
      <Header />
      <GameStatus
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        farewellMsg={farewellMsg}
      />
      <LangaugeELement
        languages={languages}
        wrongGuessCount={wrongGuessCount}
      />
      <WordElement
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      <KeyboardELement
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
        addguessedLetters={addguessedLetters}
      />
      <NewGameButton
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        setNewGame={setNewGame}
      />
    </main>
  );
}

export default App;
