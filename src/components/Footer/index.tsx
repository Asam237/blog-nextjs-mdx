import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SIZE_ICON = 22;

const socials = [
  {
    icon: <FaGithub className="text-gray-300" size={SIZE_ICON} />,
    link: "https://github.com/Asam237/blog-nextjs-mdx",
  },
  {
    icon: <FaLinkedin className="text-gray-300" size={SIZE_ICON} />,
    link: "https://www.linkedin.com/in/abba-sali-aboubakar-mamate/",
  },
  {
    icon: <FaTwitter className="text-gray-300" size={SIZE_ICON} />,
    link: "https://twitter.com/asam_237",
  },
];

export const Footer = () => (
  <footer className="my-8">
    <div className="flex justify-center items-center space-x-4">
      {socials.map((item) => (
        <Link href={item.link}>{item.icon}</Link>
      ))}
    </div>
    <div className="text-center">
      <p className="text-center mt-4 text-xs text-gray-300">
        Tous droits réservés - {new Date().getFullYear()}{" "}
        <Link
          className="text-white underline underline-offset-4 font-medium"
          href={"https://abbasali.cm"}
        >
          Abba Sali.
        </Link>
      </p>
    </div>
  </footer>
);
