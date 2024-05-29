import React from "react";
import Link from "next/link";
import Image from "next/image";

function About({}) {
  return (
    <section className="about-intro section-padding">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-6">
            <div className="sec-lg-head md-mb30">
              <h3 className="dot-titl-non mb-15 fadeIn">OUR BENEFITS</h3>
              <h4 className="d-rotate">
                <span className="">Our Team of Dedicated IT company.</span>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2 valign">
            <div className="text">
              <p className="d-slideup">
                <span className="sideup-text">
                  <span className="up-text">
                    Through our years of experience, we've also learned that
                    while
                  </span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">
                    each technology solution has its own set of advantages, they
                    all work best
                  </span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">
                    when strategically integrated with other solutions.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 ">
            <div className="imgs md-mb50">
              <div className="img1">
                <div className="o-hidden">
                  <div className="imago wow">
                    <Image
                      width={500}
                      height={500}
                      src={`/${"dark"}/assets/imgs/about/01.jpg`}
                      alt="01"
                    />
                  </div>
                </div>
              </div>
              <div className="img2">
                <div className="o-hidden">
                  <div className="imago wow">
                    <Image
                      width={500}
                      height={500}
                      src={`/${"dark"}/assets/imgs/about/02.jpg`}
                      alt="02"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="cont">
              <h2 className="d-rotate ">
                <span className="">
                  Unlock Revenue Growth for Your Business.
                </span>
              </h2>
              <div className="feat mt-80">
                <div className="item-flex d-flex align-items-center mb-50 ">
                  <div>
                    <div className="icon-img-50">
                      <Image
                        width={500}
                        height={500}
                        src={`/${"dark"}/assets/imgs/serv-icons/0.png`}
                        alt="0"
                      />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>High Standerd</h6>
                    <p className="fz-15">
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="item-flex d-flex align-items-center">
                  <div>
                    <div className="icon-img-50">
                      <Image
                        width={500}
                        height={500}
                        src={`/${"dark"}/assets/imgs/serv-icons/1.png`}
                        alt="1"
                      />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>Ease of Communication</h6>
                    <p className="fz-15">
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
