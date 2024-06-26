import React from "react";
import data from "@/data/Footer/clients.json";
import Image from "next/image";
import Link from "next/link";

function Footer({ }) {
  return (
    <footer className="sub-bg">
      <div className="sub-footer pt-40 pb-40 bord-thin-top">
        <div className="container">
          <div className="row flex-md-column flex-lg-row gap-5 gap-lg-0 align-items-center justify-content-sm-center">
            <div className="col-lg-4 col-sm-8 text-center ">
              <ul className="rest social-text d-flex justify-content-center align-items-center">
                {data.map((item) => (
                  <li key={item.id} className="col-4 brand box-bg">
                    <div className="item">
                      <div className="img">
                        <Link target="_blank" href={'./'}>
                          <Image
                            width={100}
                            height={100}
                            src={`/${"dark"}${item.src}`}
                            alt={item.title}
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="logo">
                <Link className="logo icon-img-100" href="/">
                  <Image
                    width={750}
                    height={100}
                    src={`/dark/assets/imgs/logo.png`}
                    alt="as"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content lg-end justify-content-center mw-990">
              <div className="copyright">
                <div className="ml-auto">
                  <div className="d-flex flex-row justify-content-between align-items-center" style={{ gap: 10 }}>
                    <div className="item">
                      <div className="img">
                        <Image
                          width={1}
                          height={1}
                          src='/dark/assets/imgs/footer/email.svg'
                          alt='image'
                        />
                      </div>
                    </div>
                    <p className="fz-13">support@remitradar.com</p>
                  </div>
                </div>
              </div>
              <div className="copyright">
                <div className="ml-auto">
                  <div className="d-flex flex-row justify-content-between align-items-center" style={{ gap: 10 }}>
                    <div className="item">
                      <div className="img">
                        <Image
                          width={1}
                          height={1}
                          src='/dark/assets/imgs/footer/location.svg'
                          alt='image'
                        />
                      </div>
                    </div>
                    <p className="fz-13">{`1-3 Highstreet \nGreet Dunmow, Essex,\nEngland`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="col-lg-12 d-flex justify-content-center mt-50 w-100" style={{ borderTop: '1px solid #ccc' }}>
            <div class="copyright">
              <p class="fz-13 text-center mt-50">Powered by RemitRadar Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
