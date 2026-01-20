import React from "react";
import solar from "/icons/solar-panel.png";
import renewable from "/icons/renewable-energy.png";
import energy from "/icons/energy-care.png";
import solarinst from "/icons/solarinstallation.png";
import maintenance from "/icons/maintenance.png";
const Productdetails = () => {
  return (
    <div id="main" className="p-2 mt-20">
      <div
        id="section1"
        className="h-[25vw] w-full bg-[url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center relative z-5"
      >
        <div className="absolute bg-black/50 top-0 left-0  h-full w-full z-10"></div>

        <div className="relative z-20 flex flex-col leading-0 items-center justify-center h-full">
          <h1 className="text-white text-7xl font-primary">
            IndustrialSolutions
          </h1>
          <br />
          <h1 className="text-white text-2xl font-secondary">
            Solar inverters product details
          </h1>
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

      <div id="section3">
        <h1 className="text-primary font-secondary font-light text-sm border inline rounded-full px-4 py-1">
          Detailed Specifications
        </h1>
        <div id="subtitleLine" className="flex items-center mt-5">
          <h1 className=" w-[50%] font-primary text-primary text-5xl font-bold">
            Performance, Safety & Compliance Details
          </h1>
          <p className="font-secondary text-[16px] w-[30%]">
            Detailed technical specifications engineered to deliver high
            efficiency, operational reliability, and compliance with industry
            standards.
          </p>
          <button className="bg-primary ml-5 px-6 py-2 rounded-full text-white font-primary font-medium hover:bg-secondary cursor-pointer">
            View All Projects
          </button>
        </div>
        <div id="mainContent" className="flex">
          <div id="content" className="w-[50%] pr-10 my-2">
            <h1 className="text-3xl font-medium text-primary font-primary">
              Performance & Reliability
            </h1>
            <p className="text-base text-justify font-secondary ">
              Engineered for consistent performance, the solar inverter ensures
              high energy conversion efficiency, stable grid interaction, and
              dependable operation under varying environmental and load
              conditions.
            </p>
            <div id="threepoints" className="flex justify-between mt-2">
              <h2 className="text-primary font-secondary font-light text-sm border inline rounded-full px-4 py-1">
                System Applications
              </h2>
              <h2 className="text-primary font-secondary font-light text-sm border inline rounded-full px-4 py-1">
                Operational Reliability
              </h2>
              <h2 className="text-primary font-secondary font-light text-sm border inline rounded-full px-4 py-1">
                Integration & Compatibility
              </h2>
            </div>
            <div id="smallpoints" className="flex flex-wrap  gap-10 mt-5">
              <div className="w-[45%] border p-2 border-primary rounded-xl">
                <h1 className="font-primary text-xl font-medium text-primary">
                  System Applications
                </h1>
                <p className="font-secondary text-pretty text-secondary">
                  Designed for use across residential, commercial, and
                  industrial solar installations, ensuring stable and efficient
                  power conversion in diverse environments.
                </p>
              </div>
              <div className="w-[45%] border p-2 border-primary rounded-xl">
                <h1 className="font-primary text-xl font-medium text-primary">
                  System Applications
                </h1>
                <p className="font-secondary text-pretty text-secondary">
                  Designed for use across residential, commercial, and
                  industrial solar installations, ensuring stable and efficient
                  power conversion in diverse environments.
                </p>
              </div>
              <div className="w-[45%] border p-2 border-primary rounded-xl">
                <h1 className="font-primary text-xl font-medium text-primary">
                  System Applications
                </h1>
                <p className="font-secondary text-pretty text-secondary">
                  Designed for use across residential, commercial, and
                  industrial solar installations, ensuring stable and efficient
                  power conversion in diverse environments.
                </p>
              </div>
              <div className="w-[45%] border p-2 border-primary rounded-xl">
                <h1 className="font-primary text-xl font-medium text-primary">
                  System Applications
                </h1>
                <p className="font-secondary text-pretty text-secondary">
                  Designed for use across residential, commercial, and
                  industrial solar installations, ensuring stable and efficient
                  power conversion in diverse environments.
                </p>
              </div>
            </div>
          </div>

          <div id="image" className="w-[50%] p-5 mt-5">
            <div className="bg-bg-primary/50 h-full w-full p-5 rounded-2xl">
              <img
                src={solarinst}
                alt=""
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
