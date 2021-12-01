import { useQuery } from "react-query";
import { GameCard } from "../../components/GameCard";
import { getGames } from "../../services/games";
import { useCart } from "../../contexts/Cart";

export function Games() {
  const { isLoading, data } = useQuery("games", getGames);
  const { addItem } = useCart();

  if (isLoading) return "Loading...";

  return (
    <ul className="grid lg:grid-cols-4 gap-14">
      {data?.games.map((game) => (
        <li key={game.id}>
          <GameCard
            id={game.id}
            title={game.name}
            onClick={addItem}
            image={game.image}
            description={game.description}
          />
        </li>
      ))}
    </ul>
  );
}
