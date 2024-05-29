import React from "react";
//= Layout
import Layout from "@/layouts/preview";
//= Components
import HomeDigitalAgency from "./home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function LandingPreview() {
  return <HomeDigitalAgency />;
}

LandingPreview.getLayout = (page) => <Layout>{page}</Layout>;

export default LandingPreview;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
