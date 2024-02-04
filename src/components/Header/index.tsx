import Link from "next/link";

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
  return (
    <header className="text-white py-6 sticky top-0 left-0 z-10 bg-[#23212C]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center bg-[#322f3f] px-4 rounded-md py-4 border border-gray-700">
          <Link href={"/"}>
            <h1 className="text-base font-bold">Mon Blog.</h1>
          </Link>
          <nav className="flex space-x-4">
            {links.map((item) => (
              <Link href={item.path} key={item.name}>
                <h1 className="text-xs font-bold">{item.name}</h1>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;