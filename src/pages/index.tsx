import { DefaultLayout } from "@/components/layout";
import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostCard from "@/components/PostCard";

interface PostMetadata {
  title: string;
  slug: string;
  content: string;
  bannerUrl: string;
}
const Home: FC<{ posts: PostMetadata[] }> = ({ posts }) => {
  return (
    <DefaultLayout title="Blog Next MDX">
      <div className="container mx-auto mt-8">
        <ul className="flex flex-col gap-y-7">
          {posts.map((post) => (
            <PostCard
              slug={`/${post.slug}`}
              key={post.slug}
              content={post.content}
              title={post.title}
            />
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "datas/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    const title = data.title || "Untitled";
    const content = data.subtitle;
    const bannerUrl = data.bannerUrl || "Untitled";

    return {
      title,
      content,
      bannerUrl,
      slug: fileName.replace(/\.mdx$/, ""),
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Home;
