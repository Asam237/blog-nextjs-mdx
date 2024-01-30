import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface PostMetadata {
  title: string;
  slug: string;
}

const Posts: FC<{ posts: PostMetadata[] }> = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title || "Untitled"}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    // Ensure that the title is defined
    const title = data.title || "Untitled";

    return {
      title,
      slug: fileName.replace(/\.mdx$/, ""),
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
