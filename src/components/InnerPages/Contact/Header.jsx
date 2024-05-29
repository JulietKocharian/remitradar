import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import s from "./index.module.css";

function Header() {
  const { t } = useTranslation("common");
  const { locale, locales, push } = useRouter();
  return (
    <header className="page-header section-padding sub-bg">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="sub-title">{t("nav_contact")}</h6>
              <h1 className={`${s[locale]}`}>
                {t("contact_page_title")} <br /> {t("contact_page_title_1")}
              </h1>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-4 valign">
            <div className="text">
              <p className={s["span_" + locale]}>
                {t("contact_page_title_span_1")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
