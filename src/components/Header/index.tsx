import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const links = [
  {
    name: "Page d'accueil",
    path: "/",
  },
  {
    name: "À propos",
    path: "/about",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="text-white py-6 sticky top-0 left-0 z-10 bg-[#23212C]">
      <div className="container mx-auto">
        <div className="bg-[#322f3f] p-4 rounded-2xl border border-gray-600">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <h1 className="text-base font-bold">Mon Blog.</h1>
            </Link>
            <FaBars onClick={() => handleOpen()} className="flex md:hidden" />
            <nav className="md:flex space-x-4 hidden">
              {links.map((item) => (
                <Link href={item.path} key={item.name}>
                  <h1 className="text-xs font-bold">{item.name}</h1>
                </Link>
              ))}
            </nav>
          </div>
          {open && (
            <div className="py-4">
              <nav className="flex space-y-2 flex-col justify-end items-end">
                {links.map((item) => (
                  <Link href={item.path} key={item.name}>
                    <h1 className="text-xs font-bold">{item.name}</h1>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
