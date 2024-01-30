import type { ReactNode } from "react";

interface DefaultLayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
}

export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  return (
    <>
      <header>
        <title>{title}</title>
      </header>
      {children}
    </>
  );
};
