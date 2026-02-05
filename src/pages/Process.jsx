import React from "react";

import {
  MoveRight,
  ChartGantt,
  ReplaceAll,
  PaintbrushVertical,
  Ratio,
  ScanEye,
} from "lucide-react";
const Process = () => {
  return (
    <>
      <div id="processHero" className="min-h-screen w-full bg-white relative">
        {/* Teal Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(170% 125% at 50% 100%, #ffffff 30%, #0B2B26 80%)
      `,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="relative z-10 flex flex-col text-center h-screen items-center justify-center">
          <h1 className="text-primary font-primary font-bold text-8xl leading-22">
            Process
          </h1>

          <p className="w-[60vw] text-secondary font-medium text-xm">
            We follow a structured and transparent process to deliver reliable,
            efficient, and scalable solutions. Each stage is designed to ensure
            quality execution, technical accuracy, and long-term performance
            across all projects.
          </p>
          <button className="bg-primary px-5 text-2xl text-white py-2 rounded-3xl mt-5 hover:-translate-y-1 transition">
            Contact us
          </button>
        </div>
      </div>
      <div id="SubsectionHero" className="w-full h-[30vw] max-lg:h-fit ">
        <div className="max-lg:flex-col max-lg:gap-0 max-lg:w-[100%] w-full h-full flex items-center justify-center gap-10">
          <div className="w-[40%] max-lg:w-full p-2">
            <h1 className="text-primary font-primary mb-2 font-bold text-2xl flex items-center gap-2">
              <h1>Who We are </h1>
              <MoveRight size={30} strokeWidth={2} />
            </h1>
            <h2 className="text-secondary font-secondary text-3xl max-lg:text-justify max-lg:p-4">
              Our team combines engineerin g expertise with practical industry
              experience to deliver systems that perform consistently in
              real-world conditions.
            </h2>
          </div>
          <div className="w-[50%] max-lg:w-full">
            <p className="font-primary text-2xl text-primary max-lg:text-justify max-lg:p-5">
              We are a technology-driven solutions provider delivering reliable
              energy and industrial systems for modern infrastructure. With a
              strong focus on quality, performance, and long-term reliability,
              we partner with businesses to design and implement solutions that
              support operational efficiency and sustainable growth.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_20%_20%,#c7d2fe,transparent_60%),radial-gradient(circle_at_80%_80%,#fbcfe8,transparent_60%)] ">
          <div className="max-lg:flex-col flex gap-10 p-10 ">
            <div className="static lg:sticky top-20 h-[15vw] w-[50%] pt-5 max-lg:w-full">
              <h2 className="font-primary text-4xl font-bold text-primary mb-5">
                Our Approach
              </h2>
              <p className="font-secondary text-xl w-[40vw] pb-5 max-lg:w-full">
                We believe successful projects are built on clarity, precision,
                and long-term thinking. Our approach focuses on delivering
                dependable solutions that perform consistently, adapt to
                changing needs, and create measurable value for our clients.
              </p>
            </div>
            <div className="space-y-5  w-[50%] h-full max-lg:w-full mt-60 lg:mt-0">
              <div className="flex gap-5 mb-7">
                <ChartGantt size={60} className="-mt-3" />
                <div className="">
                  <h1 className="text-primary font-primary text-2xl font-bold mt-1 pb-2">
                    Clarity in Planning
                  </h1>
                  <p className="text-secondary font-secondary text-xl">
                    We clearly define project goals, technical requirements, and
                    expectations from the beginning to ensure smooth execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <ReplaceAll size={60} className="-mt-3" />
                <div className="">
                  <h1 className="text-primary font-primary text-2xl font-bold mt-1 pb-2">
                    Precision in Execution
                  </h1>
                  <p className="text-secondary font-secondary text-xl">
                    Every stage is executed with technical accuracy, industry
                    standards, and strict quality control
                  </p>
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <PaintbrushVertical size={60} className="-mt-3" />
                <div className="">
                  <h1 className="text-primary font-primary text-2xl font-bold">
                    Performance-Driven Design
                  </h1>
                  <p className="text-secondary font-secondary text-xl">
                    Solutions are engineered to deliver consistent performance
                    under real-world operating conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <Ratio size={60} className="-mt-3" />
                <div className="">
                  <h1 className="text-primary font-primary text-2xl font-bold">
                    Scalable & Future-Ready Solutions
                  </h1>
                  <p className="text-secondary font-secondary text-xl">
                    Our systems are designed to adapt, expand, and evolve with
                    changing business and energy needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <ScanEye size={60} className="-mt-3" />
                <div className="">
                  <h1 className="text-primary font-primary text-2xl font-bold">
                    Long-Term Value Focus
                  </h1>
                  <p className="text-secondary font-secondary text-xl">
                    We clearly define project goals, technical requirements, and
                    expectations from the beginning to ensure smooth execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40vw] flex max-lg:flex-col max-lg:h-fit">
        <div className=" w-[50%] relative max-lg:w-full max-lg:h-[90vw]">
          <img
            className="absolute w-[30vw] top-20 rounded-2xl left-20 object-cover max-lg:w-[55vw] max-lg:top-10 max-lg:left-10"
            src="https://images.unsplash.com/photo-1758435342050-bf9cd198385f?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="absolute w-[30vw] h-[20vw] top-60  rounded-2xl left-50 object-cover max-lg:w-[55vw] max-lg:top-40 max-lg:left-30 max-lg:h-[40vw]"
            src="https://images.unsplash.com/photo-1655300256335-beef51a914fe?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center gap-3  w-[50%] pl-20 max-lg:w-full max-lg:pl-5 max-lg:p-10 ">
          <h1 className="text-3xl text-primary font-bold font-primary mb-5">
            WHY THIS COMBINATION WORKS
          </h1>
          <div className="flex gap-3 items-center text-2xl">
            <h1 className="bg-primary font-primary px-4 py-1.5 rounded-full text-2xl text-white font-bold">
              1
            </h1>
            <h2 className="font-secondary">Builds trust before details</h2>
          </div>
          <div className="flex gap-3 items-center text-2xl">
            <h1 className="bg-primary font-primary px-4 py-1.5 rounded-full text-2xl text-white font-bold">
              2
            </h1>
            <h2 className="font-secondary">Makes process feel purposeful</h2>
          </div>
          <div className="flex gap-3 items-center text-2xl">
            <h1 className="bg-primary font-primary px-4 py-1.5 rounded-full text-2xl text-white font-bold">
              3
            </h1>
            <h2 className="font-secondary">Feels enterprise-level</h2>
          </div>
          <div className="flex gap-3 items-center text-2xl">
            <h1 className="bg-primary font-primary px-4 py-1.5 rounded-full text-2xl text-white font-bold">
              4
            </h1>
            <h2 className="font-secondary">
              Reads like a professional case study
            </h2>
          </div>
          <div className="flex gap-3 items-center text-2xl">
            <h1 className="bg-primary font-primary px-4 py-1.5 rounded-full text-2xl text-white font-bold">
              5
            </h1>
            <h2 className="font-secondary">Works well for decision-makers</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
