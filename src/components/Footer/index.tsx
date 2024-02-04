import Link from "next/link";

export const Footer = () => (
  <footer>
    <div className="text-center">
      <p className="text-center mt-8 xl:mt-12 mb-2 text-xs text-gray-300">
        Tous droits réservés - {new Date().getFullYear()} <Link className="text-white underline underline-offset-4 font-medium" href={"https://abbasali.cm"}>Abba Sali.</Link>
      </p>
    </div>
  </footer>
);
