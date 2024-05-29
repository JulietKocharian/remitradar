import React, { useEffect } from "react";
import Link from "next/link";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import s from "./index.module.css";
function Header({}) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  const { t } = useTranslation("common");
  const { locale, locales, push } = useRouter();

  return (
    <header className="header-digital full-height valign bord-thin-bottom">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-6">
            <div className="caption">
              <h1 className={s["homeTitle_" + locale]}>
                KinGCode - {t("home_title")}
              </h1>
              <Link
                href={"/"}
                className="butn butn-md butn-bg main-colorbg2 radius-30 mt-30"
              >
                <span>Explore More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="half-img-right bg-img ontop md-hide"
        data-background={`/${"dark"}/assets/imgs/sass-img/header1.webp`}
      ></div>
      <div
        className="bg-pattern bg-img"
        data-background={`/${"dark"}/assets/imgs/patterns/graph.webp`}
      ></div>
    </header>
  );
}

export default Header;
