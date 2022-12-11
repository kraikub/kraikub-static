import type { NextPage } from "next";
import Head from "next/head";
import { KraikubIDTh } from "../../src/views/home/components/KraikubIDTh";
import { Footer } from "../../src/layouts/Footer";
import { StaticNavbar } from "../../src/layouts/StaticNavbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kraikub - Authenticate any KU students.</title>
      </Head>
      <StaticNavbar sticky/>
      <KraikubIDTh />
      <Footer />
    </>
  );
};

export default Home;
