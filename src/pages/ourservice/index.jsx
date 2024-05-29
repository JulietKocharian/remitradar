//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Portfolio from "@/components/InnerPages/Services/Portfolio";
import Clients from "@/components/InnerPages/About/Clients";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function PageServices() {
  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "SERVICES",
  };

  return (
    <>
      <Head>
        <title>KinGCode - Our services</title>
        <meta
          name="description"
          content="Web Development: Find out about our services in creating quality websites and web applications"
        />
      </Head>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Clients />
        <Portfolio />
      </main>
    </>
  );
}

PageServices.getLayout = (page) => <Layout>{page}</Layout>;

export default PageServices;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
