import React from "react";
//= Components
import Split from "@/components/Common/Split";
//= Data
import data from "@/data/InnerPages/About/clients.json";
import appData from "@/data/app-data.json";
import Image from "next/image";

function Clients() {
  return (
    <div className="clients section-padding position-re">
      <div className="sape">
        <Image
          width={500}
          height={500}
          className="about-sape"
          src={`/${"dark"}/assets/imgs/background/about-bg.png`}
          alt="01"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center mb-80">
          <div className="col-lg-6 text-center">
            <div className="text">
              <h3 style={{color: '#6a35ff'}}>How RemitRadar works</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg justify-content-center">
              {data.map((item) => (
                <div
                  className="col-md-4 col-sm-6 brand  box-bg"
                  key={Math.floor(Math.random() * 10000)}
                >
                  <div className="item mb-30 fadeIn ">
                    <div
                      style={{ height: "150px" }}
                      className="img d-flex align-items-center"
                    >
                      <Image
                        width={500}
                        height={500}
                        src={`/${"dark"}${item.image}`}
                        alt={item.id}
                      />
                    </div>
                    <p className="link fz-12 black">
                      {item.date}
                    </p>
                    <span className="h-100" style={{ textAlign: 'left' }}>
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-pattern patrn1 bg-img opacity-5"
        data-background={`/${"dark"}/assets/imgs/patterns/pattern.svg`}
      ></div>
    </div>
  );
}

export default Clients;
