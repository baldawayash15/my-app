import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { GetStaticPropsContext } from "next";

export default function PostSingle() {
  const { usePost, useQuery } = client;

  const post = usePost();
  return (
    <>
      <h1>{useQuery()?.generalSettings.title}</h1>
      <p>{useQuery()?.generalSettings.description}</p>
      <h2>{post?.title()}</h2>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: PostSingle,
    client,
  });
}
