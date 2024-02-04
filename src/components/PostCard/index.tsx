import Link from "next/link";

interface PostCardProps {
  title: string;
  content: string;
  slug: string;
}

const PostCard = ({ title, content, slug }: PostCardProps) => {
  return (
    <div className="py-4">
      <h3 className="font-bold text-base mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-5 mt-1">{content}</p>
      <Link
        href={slug}
        className="mt-5 text-[13.5px] text-blue-500 underline underline-offset-4 cursor-pointer"
      >
        Lire la suite
      </Link>
      <div className="h-[1px] bg-gray-400 w-full mt-6" />
    </div>
  );
};

export default PostCard;
