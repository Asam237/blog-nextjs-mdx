import Link from "next/link";

interface PostCardProps {
  title: string;
  content: string;
  slug: string;
}

const PostCard = ({ title, content, slug }: PostCardProps) => {
  return (
    <div>
      <Link href={slug}>
        <div className="font-bold text-base mb-2 cursor-pointer text-white underline underline-offset-8">{title}</div>
      </Link>
      <p className="text-gray-300 text-xs pt-1">{content}</p>
    </div>
  );
};

export default PostCard;
