import { DefaultLayout } from "@/components/layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";
import Image from "next/image";

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
        <div className="flex justify-center items-center">
          <Image width={128} height={128} src="/images/id-card.png" alt="img" />
        </div>
        <h4 className="font-bold text-xl lg:text-3xl mt-6 mb-2 text-white">
          En ce qui concerne cette application
        </h4>
        <div>
          <p className="leading-6 text-xs pt-6">
            Explorez de nouvelles frontières créatives avec cet application de
            création de blog intuitives.
            <br />
            Donnez vie à vos idées avec des fonctionnalités conviviales, des
            designs personnalisables et des outils puissants.
            <br />
            Exprimez votre personnalité à travers des mises en page captivantes
            et partagez vos passions avec le monde.
            <br />
            Que vous soyez un novice enthousiaste ou un blogueur expérimenté,
            nos applications offrent un terrain de jeu infini pour l&apos;expression
            individuelle.
            <br />
            Découvrez une plateforme où la créativité rencontre la technologie,
            où chaque publication devient une œuvre d&apos;art numérique.
            <br />
            Libérez votre voix, partagez vos récits et élargissez votre impact.
          </p>

          <div className="my-6">
            <div className="h-[1px] bg-gray-400 w-full" />
          </div>
        </div>
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
