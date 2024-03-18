import Link from "next/link";
import Head from "next/head";
import React from "react";
import { getPosts, getPostById } from "../../lib/posts";
import Image from "next/image";

export async function getStaticPaths() {
  const postList = await getPosts();

  return {
    paths: postList.map((post) => {
      return {
        params: {
          id: `${post.id}`,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch single post detail
  const post = await getPostById(params.id);

  return {
    props: post,
  };
}

export default function Post({ title, body }) {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by Vulcan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="header">
        <Image src="/azion.svg" width={100} height={24} alt="Azion Logo" />
      </div>
      <div class="content">
        <h1>{title}</h1>

        <p>{body}</p>

        <br />
        <Link href="/">
          <strong>Go back to home</strong>
        </Link>
      </div>
      <div class="footer">
        <a
          href="https://www.azion.com/en/documentation/"
          rel="noreferrer"
          target="_blank"
        >
          <h1>Docs</h1>
          <p>
            Besides providing structure, it allows interactions to occur with
            the surface of the element, thus enabling it to have states.
          </p>
        </a>
        <a href="https://medium.com/aziontech" target="_blank" rel="noreferrer">
          <div>
            <h1>Medium</h1>
            <p>
              Dive deep into our platform's use cases on Medium and join a
              community where developers connect, collaborate, and innovate.
            </p>
          </div>
        </a>
        <a
          href="https://twitter.com/aziontech"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h1>X (formerly Twitter)</h1>
            <p>
              Explore our features in-depth and find out what's new on our
              platform.
            </p>
          </div>
        </a>
        <a
          href="https://discord.gg/Yp9N7RMVZy"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <h1>Discord</h1>
            <p>
              A space for developers to connect, get involved and collaborate.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
