import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Karen | mirelio.</title>
        <meta name="description" content="mirelio.として活動するKarenのポートフォリオ。制作作品、スキル、ブログをご紹介します。" />
        <meta name="author" content="Karen / mirelio." />
        <meta property="og:title" content="Karen | mirelio." />
        <meta property="og:site_name" content="mirelio." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
