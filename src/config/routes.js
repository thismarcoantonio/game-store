import { Games } from "../containers/Games";
import { Cart } from "../containers/Cart";

export const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    element: <div>Home</div>
  },
  {
    path: "/games",
    meta: { title: "Games" },
    element: <Games />
  },
  {
    path: "/profile",
    meta: { title: "Profile" },
    element: <div>Profile</div>
  },
  {
    path: "/cart",
    meta: { hidden: true },
    element: <Cart />
  }
];
