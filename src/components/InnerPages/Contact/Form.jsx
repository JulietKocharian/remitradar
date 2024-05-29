import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import s from "./index.module.css";
import { findInfoUser } from "@/http/presentApi";

function Form() {
  const { t } = useTranslation("common");
  const { locale, locales, push } = useRouter();
  const postInfoUser = async (formData) => {
    const res = await findInfoUser(formData);
  };

  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h1 className="dot-titl-non mb-10">{t("nav_contact")}</h1>
              <h2 className={`${s["form_" + locale]}`}>
                {t("contact_page_form_title")} <br />
                {t("contact_page_form_title_1")}
              </h2>
              <p className="fz-15 mt-10">
                {t("contact_page_form_span_2")} <br />
                Business Hours: Monday - Friday: 9:00 AM to 6:00 PM (GMT+4)
              </p>
              <div className="phone fz-18 fw-300 mt-30">
                <a className="d-flex gap-3" href="tel:+37498722717">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                      fill="white"
                    />
                  </svg>
                  +374 98 722-717
                </a>
                <br />
                <a
                  className="d-flex gap-3"
                  target="_blank"
                  href="https://www.google.com/maps/place/KinGCode/@40.8115732,44.4829626,18.5z/data=!4m14!1m7!3m6!1s0x4041bdd707a311db:0x80c5b5cc6ebf4ad9!2sKinGCode!8m2!3d40.8115972!4d44.4832758!16s%2Fg%2F11sf93tk_n!3m5!1s0x4041bdd707a311db:0x80c5b5cc6ebf4ad9!8m2!3d40.8115972!4d44.4832758!16s%2Fg%2F11sf93tk_n?authuser=0&entry=ttu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 15H19L22 22H2L5 15H9M13 8C13 8.26522 12.8946 8.51957 12.7071 8.70711C12.5196 8.89464 12.2652 9 12 9C11.7348 9 11.4804 8.89464 11.2929 8.70711C11.1054 8.51957 11 8.26522 11 8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8ZM6 8C6 13 12 18 12 18C12 18 18 13 18 8C18 4.583 15.314 2 12 2C8.686 2 6 4.583 6 8Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  Vanadzor, Armenia
                </a>
                <br />
                <a
                  className="d-flex gap-3"
                  target="_blank"
                  href="mailto:info@kingcode.am"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="white"
                    />
                  </svg>
                  Email: info@kingcode.am
                </a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a target="_blank" href="https://www.facebook.com/KingCode21">
                    Facebook
                  </a>
                </li>
                <li className="mr-30">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/kingcode.am/"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/king-code-am/"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form
                onSubmit={async (e) => {
                  const name = e.target.name.value;
                  const surname = e.target.surname.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;
                  postInfoUser({ name, surname, email, message });
                }}
              >
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder={t("contact_input_name")}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="surname"
                        type="text"
                        required
                        name="surname"
                        placeholder={t("contact_input_surname")}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder={t("contact_input_email")}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        style={{ resize: "none" }}
                        id="message"
                        name="message"
                        placeholder={t("contact_input_textarea")}
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-md butn-bord radius-30"
                      >
                        <span className="text">{t("contact_button_name")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
