import { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../../layouts/Footer";
import { StaticNavbar } from "../../../layouts/StaticNavbar";
import { KraikubIDBanner } from "./components/KraikubIDBanner";
import { SigninBanner } from "./components/SigninBanner";
import { TitleBanner } from "./components/TitleBanner";

export const ProductPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our services</title>
      </Head>
      <StaticNavbar sticky/>
      <TitleBanner />
      <SigninBanner />
      <KraikubIDBanner />
      <Footer />
    </>
  )
}