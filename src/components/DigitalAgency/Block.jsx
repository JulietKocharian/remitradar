import React, { useState, useEffect } from "react";
//= Components
import ModalVideo from "@/components/Common/ModalVideo";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Block({ }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }

  return (
    <section style={{ height: "402px" }} className="block-img sub-bg">
      <div className="container p-3 section-padding position-re">
        {/* <div
          className="half-img-left bg-img md-hide"
          data-background={`/${"dark"}/assets/imgs/sass-img/a1.svg`}
        ></div> */}
        <div className=" justify-content-around">
          <div className="col-lg-5 offset-lg-6">
            <div className="cont">
              <div className="text">
                <h3>We grow brands through bold & strategic creative</h3>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 fadeInUp">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Website & Mobile App Design</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      Transforming brands with innovative website and mobile app
                      designs, leveraging bold and strategic creativity for
                      maximum impact and growth.
                    </p>
                  </div>
                </div>
                <div className="item mb-15 active fadeInUp">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Motion Graphics & Animation</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info active">
                    <p className="fz-14">
                      Elevating brands through dynamic motion graphics and
                      animation, infusing bold and strategic creativity for
                      impactful storytelling and brand growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        videoId="knOk3l0OIfg"
        channel="youtube"
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        autoplay
      />
    </section>
  );
}

export default Block;
