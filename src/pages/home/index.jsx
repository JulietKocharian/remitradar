import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import Clients from "@/components/InnerPages/About/Clients";
import Approach from "@/components/DigitalAgency/Approach";
import CallToAction from "@/components/DigitalAgency/CallToAction";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TransferPrices from "@/components/DigitalAgency/TransferPrices";
import TransferWays from "@/components/DigitalAgency/TransferWays";

function HomeDigitalAgency() {
  useEffect(() => {
    document.body.classList.add("home-digital");
    return () => document.body.classList.remove("home-digital");
  }, []);

  return (
    <>
      <Head>
        <title>RemitRadar Technologies</title>
        <meta
          name="description"
          content="RemitRadar: Technologies"
        />
      </Head>
      <main className="position-re">
        <TransferWays/>
        <Clients />
        <TransferPrices/>
        <ServicesTab />
        <Approach />
      </main>
    </>
  );
}

HomeDigitalAgency.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeDigitalAgency;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
