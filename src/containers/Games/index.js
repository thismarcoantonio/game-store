import { useMatch } from "react-location";
import { GameCard } from "../../components/GameCard";

export function Games() {
  const { data } = useMatch();

  return (
    <ul className="grid lg:grid-cols-4 gap-14">
      {data?.games.map((game) => (
        <li key={game.id}>
          <GameCard
            id={game.id}
            title={game.name}
            image={game.image}
            description={game.description}
          />
        </li>
      ))}
    </ul>
  );
}
