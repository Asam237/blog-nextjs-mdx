import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props: any) => <h1 style={{ color: "blue" }} {...props} />,
};

const MDXPost: FC = ({ children }: any) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXPost;
