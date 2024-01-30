import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface CustomMDXRemoteSerializeResult extends MDXRemoteSerializeResult {
  scope: Record<string, unknown>;
  frontmatter: Record<string, unknown>;
}

interface PostDetailProps {
  mdxSource: CustomMDXRemoteSerializeResult;
}

const PostDetail: React.FC<PostDetailProps> = ({ mdxSource }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default PostDetail;
