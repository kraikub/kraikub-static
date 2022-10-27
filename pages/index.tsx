import type { NextPage } from "next";
import Head from "next/head";
import { StaticNavbar } from "../src/layouts/StaticNavbar";
import { HomePage } from "../src/views/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kraikub - Authenticate any KU students.</title>
      </Head>
      <StaticNavbar sticky/>
      <HomePage />
    </>
  );
};

export default Home;
