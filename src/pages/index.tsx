import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { GetStaticPropsContext } from "next";

interface HomePageProps {
  title: string;
}

export default function Home({ title }: HomePageProps) {
  const { usePosts, useQuery } = client;
  const posts = usePosts({
    first: 6,
  })?.nodes;

  return (
    <>
      <h1>{useQuery()?.generalSettings?.title}</h1>
      <p>{useQuery()?.generalSettings?.description}</p>
      <h2>{title}</h2>

      {posts?.map((post) => (
        <article key={post.id ?? ""}>
          <h3>{post?.title()}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content() ?? "" }}></div>
        </article>
      ))}
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Home,
    client,
    props: {
      title: "Homepage",
    },
  });
}
