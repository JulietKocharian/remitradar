import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Grid from "@/components/Portfolio/ClassicGrid/3Col";

function PortfolioMasonry4() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Welcome to Our Portfolio",
    desc: "Discover the projects that define our expertise, creativity, and dedication to excellence. At KingCode, we pride ourselves on delivering innovative solutions that meet our clients' unique needs and exceed their expectations. Take a look at our diverse portfolio to see the breadth and depth of our capabilities.",
  };

  return (
    <>
      <Head>
        <title>KinGCode - Portfolio</title>
        <meta
          name="description"
          content="Discover our diverse portfolio of IT solutions at KInGcode. See how we're driving success for businesses like yours."
        />
      </Head>
      <main className="main-bg">
        <Grid />
      </main>
    </>
  );
}

PortfolioMasonry4.getLayout = (page) => <Layout>{page}</Layout>;

export default PortfolioMasonry4;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
