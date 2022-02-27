import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import index_md from "./index.md";

export default function Home() {
  return (
    <>
      <Head>
        <title>ukrajina.ondrejsika.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="container mt-2">
        <ReactMarkdown>{index_md}</ReactMarkdown>
      </div>
    </>
  );
}
