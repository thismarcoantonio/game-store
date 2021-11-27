import { Games } from "../containers/Games";
import { http } from "../services/api";

export const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    element: <div>Home</div>
  },
  {
    path: "/games",
    meta: { title: "Games" },
    element: <Games />,
    pendingMs: 300,
    pendingElement: <div>Loading...</div>,
    loader: async () => {
      const { data } = await http.get("/games");
      return { games: data.games };
    }
  },
  {
    path: "/profile",
    meta: { title: "Profile" },
    element: <div>Profile</div>
  },
];
