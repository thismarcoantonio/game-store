import { useState } from "react";
import { RiGamepadLine, RiMenu3Line } from "react-icons/ri";

export function Header({ children }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((state) => !state);
  };

  return (
    <header className="flex items-center justify-between flex-wrap bg-green-500 px-6 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <RiGamepadLine size={24} className="mr-2" />
        <span className="font-semibold text-xl tracking-tight">Game store</span>
      </div>
      <div className="block lg:hidden">
        <RiMenu3Line size={20} onClick={toggleMenu} className="text-white cursor-pointer" />
      </div>
      {open && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 bg-green-400 px-3 py-2 rounded-sm">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-6">
              Profile
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white">
              Games
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
