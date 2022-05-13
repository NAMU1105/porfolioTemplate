import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import Intro from "../components/Intro";
import Navs from "../components/Navs";
import About from "../components/About";

const Home: NextPage = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>Nehla 네일라</title>
        <meta name="description" content="Nehla's porfolio and blog website" />
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <main>
        {/* <h1></h1> */}
        <Navs />
        <Intro />
        <About />
      </main>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </>
  );
};

export default Home;
