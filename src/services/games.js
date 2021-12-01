import { http } from "../services/api";

export async function getGames() {
  const { data } = await http.get("/games");
  return { games: data.games };
}
