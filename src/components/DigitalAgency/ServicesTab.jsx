import background from './../../../public/dark/assets/imgs/background/background.jpeg';
import React, { useState, useEffect } from "react";
import Image from "next/image";


const tabData = [
  {
    id: "tabs-1",
    number: "01",
    label: "RemitRadar In Numbers",
    text: `1. RemitRadar arranges best possible price on each money transfer request.<br/>
    2. Unified solution to receive remittance quotes from multiple money transfer systems.<br/>
    3. Average savings are up to 10% on each transfer compared to high street banks, or up to 150$ for each 1500$ transaction.`,
    active: true
  },
  {
    id: "tabs-2",
    number: "02",
    label: "Online Money Transfers",
    active: false,
    text: `1. RemitRadar arranges best possible price on each money transfer request.<br/>
    2. Unified solution to receive remittance quotes from multiple money transfer systems.<br/>
    3. Average savings are up to 10% on each transfeup to 150$ for each 1500$ transaction.`,
  },
  {
    id: "tabs-3",
    number: "03",
    active: false,
    label: "Cash Payout Locator",
    text: `1. RemitRadar arranges best possible price on each money transfer request.<br/>
    2. Unified solution to receive remittance quotes from multiple money transfer systems.<br/>
    3. Average savings are up to 10% on each transfer compared to high street banks, or up to 150$ for each 1500$ transaction`,
  },
  {
    id: "tabs-4",
    number: "04",
    active: false,
    label: "Cash Money Transfers",
    text: `1. RemitRadar arranges best possible price on each money transfer request.<br/>
    2. Unified solution to receive remittance quotes from multiple money transfer systems.<br/>
    3. Average savings are up to 10% on each transfer 
    ompared to high street banks, or up to 150$ for each 1500$ transactioompared`,
  },
];

function ServicesTab({ }) {

  const [tabs, setTabs] = useState(tabData);
  const [activeText, setActiveText] = useState('');

  function openTab(index) {
    const updatedTabs = tabs.map((tab, i) => ({
      ...tab,
      active: i === index,
    }));
    setTabs(updatedTabs);
    console.log(updatedTabs)
  }

  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.active);
    if (activeTab) {
      setActiveText(activeTab.text);
    }
  }, [tabs]);

  const [active, setActive] = useState(0)

  return (
    <section className="services-tab section-padding">
      <div className="container">
        <div className="row" id="tabs">
          <div className="col-lg-6 order2 col-md-6 col-sm-6">
            <div className="serv-tab-cont mb-80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <Image
                      width={500}
                      height={500}
                      src={background}
                      alt="ServImg"
                    />
                  </div>
                  <div className="cont sub-bg-white">
                    <div className="text">
                      <p className="black" dangerouslySetInnerHTML={{ __html: activeText }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign order1 col-md-6 col-sm-6">
            <div className="serv-tab-link tab-links full-width md-mb50">
              <div className="sec-lg-head mb-80">
                <h2 className="dot-titl-non mb-15">RemitRadar acts as an advocate for the interests of consumers</h2>
                <span className="blue">
                  BEST RATE GUARANTEED
                </span>
                <span className="black">
                  &nbsp;WHEN TRANSFER MONEY ABROAD
                </span>
              </div>
              <ul className="rest">
                {tabData.map((tab, index) => (
                  <li className={`item-link ${tab.id === "tabs-1" ? "current" : ""} mb-15`} data-tab={tab.id} key={tab.id}>
                    <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => { setActive(index); openTab(index) }}>
                      <span className={index === active ? "blue" : ""}>{tab.number}</span>
                    </button>
                    <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => { setActive(index); openTab(index) }}>
                      <span className={index === active ? "blue" : ""}>{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default ServicesTab;
