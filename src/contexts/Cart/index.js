import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getGames } from "../../services/games";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { data } = useQuery("games", getGames);

  useEffect(() => {
    if (data?.games?.length) {
      setCart(data.games.slice(0, 5));
    }
  }, [data]);

  const addItem = (id) => {
    return setCart((state) => [
      ...state,
      data.games.find((game) => game.id === id)
    ]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
