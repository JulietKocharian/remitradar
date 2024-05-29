import React, { useState } from "react";
//= Components
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
//= Data
import CountryCurrencySelect from "../Select/CountryCurrencySelect";
import CheckboxGroup from "../Common/Checkbox";

function TransferWays({ }) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation("common");
  const { locale, locales, push } = useRouter();
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-lg-head mb-20">
          <div className="row">
            <div className="col-lg-6">
              <h6 className="mb-15">{t("transfers")}</h6>
            </div>
          </div>
          <div className="row justify-content-center" >
            <div className="services-mainContainer container col-12 col-lg-12 col-md-11 col-sm-11">
              <div className="row mt-10 justify-content-center">
                <div className="col-lg-6 col-12 col-md-8 col-sm-8 flex-md-column flex-lg-row">
                  <p className="black">Sending:</p>
                  <CountryCurrencySelect defaultValue={{ code: "US", currency: "USD", name: "United States" }} />
                  <p className="black">Receiver gets:</p>
                  <CountryCurrencySelect defaultValue={{ code: "US", currency: "USD", name: "United States" }} />
                  <button className="btn btn-info btn-lg mt-30" onClick={() => setVisible(true)}>
                    <span style={{ color: 'white' }}>GET STARTED</span>
                  </button>
                </div>
              </div>
              <div className="row mt-10 justify-content-center fees">
                <div className="col-lg-6 col-12 col-md-8 col-sm-8 flex-lg-row d-flex justify-content-between flexContainer mt-30">
                  <div className="d-flex flex-row">
                    <div className="pr">
                      <p className="black">Fee</p>
                      <p className="blue" style={{ textDecoration: 'line-through' }}>2.99</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="pr">
                      <p className="black">Auction Rate</p>
                      <p className="blue">76.8506</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div>
                      <p className="black">Delivery</p>
                      <p className="blue">0-2 days</p>
                    </div>
                  </div>
                </div>
                {
                  isOpen &&
                  <div className="row mt-10 justify-content-center fees">
                    <div className="col-lg-6 col-12 col-md-8 col-sm-8 flex-lg-row d-flex justify-content-between flexContainer">
                      <div className="d-flex flex-row">
                        <div className="pr">
                          <p className="black">Banks Fee</p>
                          <p className="black">20</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="pr">
                          <p className="black">Banks Rate</p>
                          <p className="black">66.3533</p>
                        </div>
                      </div>
                      <div>
                        <p className="black">Delivery</p>
                        <p className="black">3-4 days</p>
                      </div>
                    </div>
                  </div>
                }
              </div>
              <div className="row mt-30 justify-content-center">
                <div className="col-lg-6 d-flex justify-content-center">
                  <button className="btn btn-info" onClick={() => { setIsOpen((prev) => !prev) }}>
                    <span style={{ color: 'white' }}>{isOpen ? 'Close' : 'Compare with others'}</span>
                  </button>
                </div>
              </div>
              <div className="row w-100 justify-content-center">
                <CheckboxGroup />
              </div>
              {visible &&
                <div className="row mt-30 justify-content-center">
                  <div className="col-lg-6 d-flex justify-content-center">
                    <p className="red">you must agree and check all boxes to continue</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransferWays;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),

      // Will be passed to the page component as props
    },
  };
}
