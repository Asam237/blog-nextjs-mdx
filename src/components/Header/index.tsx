import Link from "next/link";

const links = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "A propos",
    path: "/about",
  },
];

const Header = () => {
  return (
    <header className="text-white py-6 sticky top-0 left-0 z-10 bg-[#150E31]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-base font-bold">BLOG.</h1>
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