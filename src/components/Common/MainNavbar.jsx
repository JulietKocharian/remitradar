import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DropDown } from "../dropdown";
import { useRouter } from "next/router";
import s from "./MainNavbar.module.css";
import Image from "next/image";

function MainNavbar({ mainBg, subBg, noStatic, curve }) {
  const { t } = useTranslation("common");
  const { locale, locales, push } = useRouter();
  const [click, setClick] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const language = locale;

  useEffect(() => {
    if (click) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [click]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }

  function toggleNavbar() {
    setClick(!click);
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }
  return (
    <nav
      className={`navbar navbar-expand-lg ${curve ? "nav-crev" : ""} ${noStatic ? "" : "static"
        } ${mainBg ? "main-bg" : ""} ${subBg ? "sub-bg" : ""}`}
    >
      <div className="container">
        <Link className="logo icon-img-100" href="/">
          <Image
            width={120}
            height={200}
            src="/dark/assets/imgs/logo.png"
            alt="logo"
            className="w-100"
          />
        </Link>
        <button
          className={`navbar-toggler ${(click && "hamburger") || ""}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className={`${(click && "showBg") || "showBgNone"}`}></div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className={`navbar-nav align-items-center ${s[language]}`}>
            <li className="nav-item w-100">
              <Link className="nav-link" href={`/`}>
                <span className="nowrap">{t("nav_home")}</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link className="nav-link" href={`/`}>
                <span className="nowrap">{t("nav_news")}</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link className="nav-link" href={`/`}>
                <span className="nowrap">{t("nav_team")}</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link
                className="nav-link"
                aria-label="ourservice"
                href={`/`}
              >
                <span className="nowrap">{t("nav_services")}</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link className="nav-link" href={`/`}>
                <span className="nowrap">{t("nav_api")}</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link className="nav-link" href={`/`}>
                <span className="nowrap">{t("nav_widgets")}</span>
              </Link>
            </li>
            <li className={`nav-item w-100 ${s.nav_li}`}>
              <DropDown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
