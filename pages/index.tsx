import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../src/layouts/Footer";
import { StaticNavbar } from "../src/layouts/StaticNavbar";
import { ThTranslateNav } from "../src/layouts/ThTranslateNav";
import { HomePage } from "../src/views/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kraikub - Authenticate any KU students.</title>
      </Head>
      {/* <ThTranslateNav /> */}
      <StaticNavbar sticky/>
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
