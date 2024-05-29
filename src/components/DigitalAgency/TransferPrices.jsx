import React, { useState, useEffect } from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
//= Data
import data from "@/data/TransferPrices/transferPrices.json";
import Image from "next/image";

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 40,
  speed: 1000,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".work-carsouel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".work-carsouel .swiper-button-next",
    prevEl: ".work-carsouel .swiper-button-prev",
  },
};

function TransferPrices() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="work-carsouel section-padding position-re o-hidden">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="dot-titl-non mb-15">Best Online Money Transfer Prices</h2>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="full-width">
                <div className="d-flex justify-content-end justify-end">
                  <div className="swiper-controls arrow-out d-flex">
                    <div
                      className="swiper-button-prev"
                      tabIndex="0"
                      role="button"
                      aria-label="Previous slide"
                    >
                      <span className="left d-flex align-items-center justify-content-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div
                      className="swiper-button-next ml-50"
                      tabIndex="0"
                      role="button"
                      aria-label="Next slide"
                    >
                      <span className="right d-flex align-items-center justify-content-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid m_auto rest">
        <div className="">
          <div className="col-12 p-0 px-lg-3">
            <div className="work-crus work-crus3 out">
              {loadSwiper && (
                <Swiper
                  id="content-carousel-container-unq-w"
                  className="swiper-container"
                  {...swiperOptions}
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="item">
                        <div className="img">
                          <Image
                            src={`/dark/${item.image}`}
                            width={400}
                            height={520}
                            alt="01"
                          />
                          <div className="cont">
                            <h6 className="fz-12">{item.title}</h6>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="black">{item.currency}</p>
                        <p className="black">{item.country}</p>
                        <p className="black">{item.time}</p>
                        <p className="black">{item.compareCurrent}</p>
                        <p className="black" style={{ textDecoration: 'line-through' }}>{item.comparePrevious}</p>
                        <p className="black">{item.current}</p>
                        <p className="black" style={{ textDecoration: 'line-through' }}>{item.previous}</p>
                        <p className="black">Fee: {item.fee}</p>
                        <p className="black">Best Company: {item.bestCompany}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransferPrices;
