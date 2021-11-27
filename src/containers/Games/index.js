import { useMatch } from "react-location";

export function Games() {
  const { data } = useMatch();

  return (
    <ul>
      {data?.games.map((game) => (
        <li key={game.id}>
          {game.name}
        </li>
      ))}
    </ul>
  );
}
