import Link from "next/link";

import { Post as PostType } from "client";

export interface PostProps {
  post: PostType;
}

export default function Post(props: PostProps) {
  const { post } = props;
  return (
    <article>
      <Link href={`/posts/` + post?.slug}>
        <a>
          <h1>{post?.title()}</h1>
        </a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post?.content() ?? "" }} />
    </article>
  );
}
