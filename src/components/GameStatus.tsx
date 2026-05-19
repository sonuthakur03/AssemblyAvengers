import { clsx } from "clsx";
interface GameStatusProps {
  isGameLost: boolean;
  isGameOver: boolean;
  isGameWon: boolean;
  farewellMsg: string;
}
const GameStatus = ({
  isGameLost,
  isGameOver,
  isGameWon,
  farewellMsg,
}: GameStatusProps) => {
  return (
    <section
      className={clsx(
        "h-24  w-full p-6 my-2 flex-box rounded-md transition-all",
        isGameWon && "bg-[#10A95B]",
        farewellMsg && !isGameLost && "bg-[#7A5EA7]",
        isGameLost && "bg-[#BA2A2A]",
      )}
    >
      <p className="text-2xl font-bold italic">
        {isGameOver
          ? isGameLost
            ? `You lose! Better start learning Assembly 😭🫡`
            : `You win! Well Done!!🎉`
          : farewellMsg}
      </p>
    </section>
  );
};

export default GameStatus;
