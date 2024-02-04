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
        <div>
          <h4 className="font-bold text-xl lg:text-3xl my-2 text-white">
            Actualités récentes du blog
          </h4>
          <p className="text-gray-300 text-sm leading-5">
            Découvrez les dernières nouvelles personnelles, les recherches que
            j'ai partagées dans le domaine de l'informatique.
          </p>
        </div>
        <div className="my-6">
          <div className="h-[1px] bg-gray-400 w-full" />
        </div>
        <div>
          <ul className="flex flex-col gap-y-2">
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
