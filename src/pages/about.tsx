import { DefaultLayout } from "@/components/layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";

interface CustomMDXRemoteSerializeResult extends MDXRemoteSerializeResult {
  scope: Record<string, unknown>;
  frontmatter: Record<string, unknown>;
}

interface AboutProps {
  mdxSource: CustomMDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    subtitle: string;
  };
}

const About: FC<AboutProps> = ({ mdxSource, frontMatter }) => {
  return (
    <DefaultLayout>
      <div className="container mx-auto mt-8">
        <ul className="flex flex-col gap-y-7">
          <div className="text-gray-200">
            <h1>{frontMatter.title}</h1>
            <hr className="my-4 text-gray-100" />
            <div className="text-xs leading-5">
              <MDXRemote {...mdxSource} />
            </div>
          </div>
        </ul>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "datas/about");
  const filePath = path.join(postsDirectory, `about.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}
export default About;
