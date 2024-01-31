import type { ReactNode } from "react";
import { Footer } from "../Footer";
import Header from "../Header";

interface DefaultLayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
