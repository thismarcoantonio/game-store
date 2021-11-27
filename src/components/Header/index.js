import { useState } from "react";
import { Link } from "react-location";
import { RiGamepadLine, RiMenu3Line, RiShoppingCartLine } from "react-icons/ri";
import { routes } from "../../config/routes";
import clsx from "clsx";

export function Header({ children }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((state) => !state);
  };

  const getActiveProps = (location) => {
    return { className: "bg-green-400" };
  };

  return (
    <header className="flex items-center justify-between flex-wrap bg-green-500 px-6 py-4">
      <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
        <RiGamepadLine size={24} className="mr-2" />
        <span className="font-semibold text-xl tracking-tight">Game store</span>
      </Link>
      <div className="flex text-white lg:order-1">
        <Link to="/cart" className="mr-4 lg:mr-0">
          <RiShoppingCartLine size={20} />
        </Link>
        <RiMenu3Line size={20} onClick={toggleMenu} className="cursor-pointer select-none lg:hidden" />
      </div>
      <div className={clsx({ hidden: !open }, "w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:block", )}>
        <div className="text-sm lg:flex-grow">
          {routes.map((route) => (
            <Link
              to={route.path}
              key={route.path}
              getActiveProps={getActiveProps}
              className="block mt-4 px-3 py-2 rounded-sm text-white lg:inline-block lg:mt-0 lg:mr-2 lg:py-1"
            >
              {route.meta.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
