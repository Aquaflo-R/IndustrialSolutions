import React from "react";
import solar from "/icons/solar-panel.png";
import renewable from "/icons/renewable-energy.png";
import energy from "/icons/energy-care.png";

import maintenance from "/icons/maintenance.png";
const Productdetails = () => {
  return (
    <div id="main" className="p-2">
      <div
        id="section1"
        className="h-[25vw] w-full bg-[url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center relative z-5"
      >
        <div className="absolute bg-black/40 top-0 left-0  h-full w-full z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl">hello</h1>
        </div>
      </div>

      <div id="section2" className="py-20">
        <h2 className="text-primary font-secondary font-light text-sm border inline rounded-full px-4 py-1">
          Key Specifications
        </h2>
        <h1 className="text-primary font-bold text-[50px] w-2xl mt-5 leading-13 max-sm:w-screen">
          Revolutionizing Energy for a Sustainable Tomorrow
        </h1>
        <div className="flex py-3 items-start max-sm:flex-col justify-between">
          <h1 className="text-secondary font-secondary w-[60%] text-xl pt-3 max-sm:w-screen">
            At <span className="font-bold text-xl">IndustrialSolutions,</span>{" "}
            we deliver high-performance solar and energy systems designed to
            meet the growing demands of residential, commercial, and industrial
            sectors. Our solutions focus on efficiency, reliability, and
            long-term sustainability.
          </h1>
          <div className=" flex max-sm:flex ">
            <div className="w-[30%]  max-sm:ml-0">
              <h1 className="font-primary text-primary text-4xl font-bold mb-2">
                173k
              </h1>
              <h2 className="font-secondary font-bold text-secondary text-lg">
                kWh Energy Generated
              </h2>
            </div>
            <div className="w-[40%] ">
              <h1 className="font-primary text-primary text-4xl font-bold mb-2">
                8,934
              </h1>
              <h2 className="font-secondary font-bold text-secondary text-lg">
                Homes & Businesses Powered
              </h2>
            </div>
          </div>
        </div>
        <div
          id="featureCards"
          className="flex justify-even mt-6 max-sm:flex-col"
        >
          <div className="feature w-[25%] px-5 bg-secondary-dark mr-3 p-2 rounded-xl max-sm:w-screen mt-2">
            <img className="w-[20%] mt-2" src={solar} alt="" />
            <h1 className="text-xl font-primary font-bold text-white mt-5">
              Solar System Design
            </h1>
            <p className="text-white font-secondary text-justify my-2 text-base">
              Custom-engineered solar systems designed to maximize energy
              output, site efficiency, and long-term performance across diverse
              applications.
            </p>
          </div>
          <div className="feature w-[25%] px-5 bg-bg-primary mr-3 p-2 rounded-xl max-sm:w-screen mt-2">
            <img className="w-[20%] mt-2" src={renewable} alt="" />
            <h1 className="text-xl font-primary font-bold text-black mt-5">
              Smart Energy Storage
            </h1>
            <p className="text-black font-secondary text-justify my-2 text-base">
              Advanced battery and storage solutions that ensure uninterrupted
              power supply and optimal energy usage, even during peak demand.
            </p>
          </div>
          <div className="feature w-[25%] px-5 bg-secondary-dark mr-3 p-2 rounded-xl max-sm:w-screen mt-2">
            <img className="w-[20%] mt-2" src={energy} alt="" />
            <h1 className="text-xl font-primary font-bold text-white mt-5">
              Energy Efficiency Solutions
            </h1>
            <p className="text-white font-secondary text-justify my-2 text-base">
              High-efficiency inverters and power management systems that reduce
              energy loss and improve overall system performance.
            </p>
          </div>
          <div className="feature w-[25%] px-5 bg-secondary-dark mr-3 p-2 rounded-xl max-sm:w-screen mt-2">
            <img className="w-[20%] mt-2" src={maintenance} alt="" />
            <h1 className="text-xl font-primary font-bold text-white mt-5">
              Monitoring & Maintenance
            </h1>
            <p className="text-white font-secondary text-justify my-2 text-base">
              Real-time system monitoring, performance tracking, and proactive
              maintenance services to ensure consistent energy production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
