// pages/posts/[slug].tsx
import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import PostDetail from "@/components/PostDetail";
import { DefaultLayout } from "@/components/layout";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface CustomMDXRemoteSerializeResult extends MDXRemoteSerializeResult {
  scope: Record<string, unknown>;
  frontmatter: Record<string, unknown>;
}

interface PostProps {
  mdxSource: CustomMDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    subtitle: string;
    date: string;
    autor: string;
  };
}

const Post: FC<PostProps> = ({ mdxSource, frontMatter }) => {
  return (
    <DefaultLayout>
      <div className="container mx-auto py-4 text-gray-300 text-xs leading-6">
        <div className="mb-8 mt-4">
          <Link href={"/"} className="text-gray-400 text-xs flex items-center hover:text-white">
            <FaArrowLeft size={18} className="mr-2" /> Retourner aux articles.
          </Link>
        </div>
        <div className="text-start">
          <h1 className="text-gray-400 text-xs">{frontMatter.date}</h1>
          <h1 className="text-white text-xl xl:text-2xl">
            {frontMatter.subtitle}
          </h1>
        </div>
        <div className="my-6">
          <div className="h-[1px] bg-gray-400 w-full" />
        </div>
        <PostDetail mdxSource={mdxSource} />
        <div className="mt-4 mb-8">
          <p className="text-gray-400 text-xs">
            Écrit par:{" "}
            <span className="text-white pl-1.5 underline underline-offset-4">
              {frontMatter.autor}
            </span>
          </p>
        </div>
        <div className="my-6">
          <div className="h-[1px] bg-gray-400 w-full" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "datas/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), "datas/posts");
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
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

export default Post;
