// pages/posts/[slug].tsx
import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import PostDetail from "@/components/PostDetail";
import Header from "@/components/Header";
import { DefaultLayout } from "@/components/layout";

interface CustomMDXRemoteSerializeResult extends MDXRemoteSerializeResult {
  scope: Record<string, unknown>;
  frontmatter: Record<string, unknown>;
}

interface PostProps {
  mdxSource: CustomMDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    subtitle: string;
  };
}

const Post: FC<PostProps> = ({ mdxSource, frontMatter }) => {
  return (
    <DefaultLayout>
      <div className="container mx-auto py-4 text-gray-300 text-xs leading-6">
        <h1 className="text-white text-lg">{frontMatter.subtitle}</h1>
        <PostDetail mdxSource={mdxSource} />
      </div>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
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
  const postsDirectory = path.join(process.cwd(), "posts");
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
