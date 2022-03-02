import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { GetStaticPropsContext } from "next";

import { Post } from "components";

export interface MyPageProps {
  title: string;
}

// const posts = [
//   {
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     content:
//       "quia et suscipit suscipit recusandae consequuntur expedita et reprehenderit",
//   },
//   {
//     id: 2,
//     title: "qui est esse",
//     content:
//       "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae",
//   },
// ];

export default function PostsPage({ title }: MyPageProps) {
  const { usePosts, useQuery } = client;
  const posts = usePosts()?.nodes;

  return (
    <>
      <h1>{useQuery()?.generalSettings?.title}</h1>
      <p>{useQuery()?.generalSettings?.description}</p>
      <h2>{title}</h2>
      {posts.map((post) => (
        <Post key={post.id ?? ""} post={post} />
      ))}
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: PostsPage,
    client,
    // Custom Props (Optional)
    props: {
      title: "Recent Posts",
    },
    //revalidate: 60 (Optional 15 Minutes Default set by Faust.js)
  });
}
