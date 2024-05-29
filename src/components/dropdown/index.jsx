import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from "./localSwitcher.module.css";

//Component dropdown for languages
export const DropDown = ({ isOpen, setIsOpen }) => {
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  const pathname = router.locale;

  const handleClick = (l) => () => {
    push(``, undefined, { locale: l });
  };

  useEffect(() => {
    if (locale === 'am') {
      document.body.style.fontFamily = 'Montserratarm-Light';
    }
    else{
      document.body.style.fontFamily = `"Space Grotesk", sans-serif`
    }
  }, [locale]);

  const countries = [
    {
      option: "ENG",
      lang: "en",
      value: "/",
      path: '/',
    },
    {
      option: "ՀԱՅ",
      lang: "am",
      value: "/am",
      path: '/',
    },
    {
      option: "РУС",
      lang: "ru",
      value: "/ru",
      path: '/',
    },
  ];

  return (
    <ul className={s.countries}>
      {locales.map((locale) => (
        <li
          onClick={handleClick(locale)}
          className={s.countries_block}
          key={locale}
        >
          <button
            aria-label="button"
            className={`${s.lang} ${pathname === `${locale}` && s.active_bg}`}
          >
            {locale}
          </button>
        </li>
      ))}
      <div
        className={s.countries_bg}
        style={{
          left: locale === "en" ? 0 : locale === "ru" ? "41px" : "82px",
        }}
      ></div>
    </ul>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}