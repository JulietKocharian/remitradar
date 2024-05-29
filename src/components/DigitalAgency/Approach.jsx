import React, { useState, useEffect } from "react";
import Link from "next/link";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

//= Data
import data from "@/data/MoneyTransfers/transferWays.json";

const swiperOptions = {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

function Approach() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="approach-carso section-padding">
      <div className="container">
        <div className="swiper4">
          {loadSwiper && (
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-approch"
              className="swiper-container d-flex"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="item text-center d-flex align-items-center flex-column">
                    <div className="img icon-img-100">
                      <Image
                        width={500}
                        height={500}
                        src={`${"/dark"}/${item.image}`}
                        alt="image"
                      />
                    </div>
                    <p className="blue">{item.title}</p>
                    <p className="fz-14 mt-30 black">{item.date}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

export default Approach;
