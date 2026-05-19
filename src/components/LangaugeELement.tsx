import { clsx } from "clsx";
import type { Language } from "../languages";
import type { JSX } from "react";

interface LangaugeELementProps {
  languages: Language[];
  wrongGuessCount: number;
}

const LangaugeELement = ({
  languages,
  wrongGuessCount,
}: LangaugeELementProps): JSX.Element => {
  const languageElements: JSX.Element[] = languages.map(
    (language: Language, index: number): JSX.Element => {
      // Check if this specific language should be "lost"
      const isLost: boolean = index < wrongGuessCount;
      return (
        <button
          key={language.name}
          style={{
            backgroundColor: language.backgroundColor,
            color: language.color,
          }}
          className={clsx(
            "relative p-2 rounded-md font-semibold overflow-hidden transition-all",
            // Only apply these classes if isLost is true
            isLost &&
              "before:content-['💀'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:bg-black/70 before:text-[0.85rem]",
          )}
        >
          {language.name}
        </button>
      );
    },
  );
  return (
    <section className="flex-box flex-wrap w-[75%] gap-2">
      {languageElements}
    </section>
  );
};

export default LangaugeELement;
