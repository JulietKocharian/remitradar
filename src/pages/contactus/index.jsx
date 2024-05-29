//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Form from "@/components/InnerPages/Contact/Form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function PageContact() {

  return (
    <>
      <Head>
        <title>KinGCode - Contact Us</title>
        <meta
          name="description"
          content="Contact KInGcode for tailored IT solutions and expert consultations."
        />
      </Head>
      <main>
        <Form />
      </main>
    </>
  );
}

PageContact.getLayout = (page) => <Layout>{page}</Layout>;

export default PageContact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
