import type { ReactNode } from "react";
import { Footer } from "../Footer";
import Header from "../Header";
import cn from "clsx";
import { EuclidUiDisplay } from "@/lib/fonts";

interface DefaultLayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={cn(EuclidUiDisplay.variable)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
