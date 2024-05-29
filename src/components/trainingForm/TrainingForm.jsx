import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { findInfoUser } from "@/http/presentApi";

function TrainingForm() {
  const { t } = useTranslation("common");
  const postInfoUser = async (formData) => {
    const res = await findInfoUser(formData);
  };

  return (
    <section className="contact-crev contact-crev-modal  mt-20 mb-20">
      <div>
        <div>
          <div className="col-lg-12">
            <div>
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
                        id="message"
                        name="message"
                        placeholder={t("contact_input_textarea")}
                        rows="2"
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

export default TrainingForm;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
