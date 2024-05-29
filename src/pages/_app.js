import React, { useEffect } from "react";
//= Packages
import Script from "next/script";
import Head from "next/head";
//= Common Styles
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Navbar from "@/components/Common/MainNavbar";
import Footer from "@/components/DigitalAgency/Footer";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return getLayout(
    <>
      <Head>
        <title>remitradar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="remitradar"
        />
      </Head>

      <Navbar mainBg />
      <Component {...pageProps} />
      <Footer />

      <Script
        defer
        async
        strategy="beforeInteractive"
        src="/assets/js/plugins.js"
      ></Script>
      <Script
        defer
        async
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        defer
        async
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      ></Script>
      <Script
        defer
        async
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        defer
        async
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        defer
        async
        strategy="beforeInteractive"
        src="/assets/js/ScrollSmoother.min.js"
      ></Script>
      <Script
        defer
        async
        strategy="beforeInteractive"
        src="/showcase/assets/js/anime.min.js"
      ></Script>
      <Script
        defer
        async
        strategy="beforeInteractive"
        src="/assets/js/scripts.js"
      ></Script>
    </>
  );
}

export default appWithTranslation(App);
