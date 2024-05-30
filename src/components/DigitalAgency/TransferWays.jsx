import React, { useState } from "react";
//= Components
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
//= Data
import CountryCurrencySelect from "../Select/CountryCurrencySelect";
import CheckboxGroup from "../Common/Checkbox";
import Image from "next/image";

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
              <h6 className="mb-15 blue">{t("transfers")}</h6>
            </div>
          </div>
          <div className="row align-items-center" >
            <div className="laptop">
              <Image
                width={500}
                height={500}
                className="man-lap"
                src={`/${"dark"}/assets/imgs/background/laptop-man.png`}
                alt="01"
              />
            </div>
            {/*  */}
            <div className="col-lg-6 col-md-12 col-sm-12" style={{zIndex: '100'}}>
              <div className="banner-content">
                <h1 className="head">Compare Money Transfers</h1>
                <p className="text">
                  Save on fees, obtain the best exchange rates and find <br />
                  the cheapest transfer provider with our real-time comparison.
                </p>
              </div>
            </div>

            {/*  */}
            <div className="services-mainContainer  col-lg-6 col-md-12 col-sm-12">
              <div className="row mt-10 justify-content-center">
                <div className="col-lg-10 col-md-8 col-sm-8 flex-md-column flex-lg-row">
                  <p className="exchangeText">Sending:</p>
                  <CountryCurrencySelect defaultValue={{ code: "US", currency: "USD", name: "United States" }} />
                  <p className="exchangeText">Receiver gets:</p>
                  <CountryCurrencySelect defaultValue={{ code: "US", currency: "USD", name: "United States" }} />
                  <button className="btn btn-info btn-lg mt-30 startBtn" onClick={() => setVisible(true)}>
                    <span style={{ color: 'white' }}>GET STARTED</span>
                  </button>
                </div>
              </div>
              <div className="row mt-10 justify-content-center fees">
                <table className="table mt-3">
                  <tbody>
                    <tr className="col-lg-10 col-md-8 col-sm-8 flex-lg-row d-flex justify-content-between flexContainer mt-30 center">
                      <td className="d-flex flex-row">
                        <div className="pr">
                          <p className="exchangeText">Fee</p>
                          <p className="blue"><del>2.99</del></p>
                        </div>
                      </td>
                      <td className="d-flex flex-row">
                        <div className="pr">
                          <p className="exchangeText">Auction Rate</p>
                          <p className="blue">76.8506</p>
                        </div>
                      </td>
                      <td className="d-flex flex-row">
                        <div>
                          <p className="exchangeText">Delivery</p>
                          <p className="blue">0-2 days</p>
                        </div>
                      </td>
                    </tr>
                    {
                      isOpen &&
                      <tr className="col-lg-10 col-md-8 col-sm-8 flex-lg-row d-flex justify-content-between flexContainer mt-30 center">
                        <td className="d-flex flex-row">
                          <div className="pr">
                            <p className="black">Banks Fee</p>
                            <p className="blue"><del>20</del></p>
                          </div>
                        </td>
                        <td className="d-flex flex-row">
                          <div className="pr">
                            <p className="black">Banks Rate</p>
                            <p className="blue">66.3533</p>
                          </div>
                        </td>
                        <td className="d-flex flex-row">
                          <div>
                            <p className="black">Delivery</p>
                            <p className="blue">3-4 days</p>
                          </div>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
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
