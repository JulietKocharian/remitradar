//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import About from "@/components/DigitalAgency/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function PageTraining() {

  // const headerMetadata = {
  //   subTitle: "WHAT CAN WE DO ?",
  //   title: "We combine our passion for design and code.",
  //   text: "TRAINING",
  // };

  return (
    <>
      <Head>
        <title>KinGCode - Training</title>
        <meta
          name="description"
          content="Boost your career with KInGcode Training Center. Register today for cutting-edge IT programs."
        />
      </Head>
      <main>
        <Intro />
        <About />
      </main>
    </>
  );
}

PageTraining.getLayout = (page) => <Layout>{page}</Layout>;

export default PageTraining;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
