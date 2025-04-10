import Head from "next/head";
import container from "../../public/Container (1).svg";
import container1 from "../../public/Container (2).svg";
import FR from "../../public/FR.svg";
import NLST from "../../public/NLST.svg";
import Bar from "../../public/Bar.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import RecoveryTimeBox from "./RecoveryTime";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <div className="p-4">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Rapid, reliable recovery - Takes up 5 columns */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-4 bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-7 w-full">
            <div className="flex flex-col gap-4 w-full lg:max-w-[50%]">
              <div className="w-full lg:max-w-[328px]">
                <h2 className="text-xl font-semibold mt-4 text-[#0F0E47]">
                  Rapid, reliable recovery
                </h2>
                <p className="text-[#4B5563] mb-6 text-sm">
                  Recover anything—from a single file to your entire production
                  instance complete with network configurations—in seconds.
                </p>
              </div>
              <div className="flex items-start bg-white rounded-lg w-full py-6 px-4 shadow-sm">
                <label className="inline-flex items-center me-2 cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#70cf98] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#70cf98] dark:peer-checked:bg-[#70cf98]"></div>
                </label>
                <p className="text-gray-800 text-sm">
                  <span className="text-xs font-semibold">
                    Capture VPC Settings
                  </span>
                  <br />
                  <span>
                    Automatically capture changes in network configurations
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-3 flex flex-col w-full lg:max-w-[50%]">
              <RecoveryTimeBox value={30} maxValue={60} label="recovery time" />
              <div className="flex flex-col gap-3">
                <div className="flex gap-1 bg-white items-center rounded-full p-2 shadow-sm">
                  <FaCheck className="text-[#70cf98]" />
                  <p className="text-gray-800 text-sm">
                    DR of encrypted resources
                  </p>
                </div>
                <div className="flex gap-1 bg-white items-center rounded-full p-2 shadow-sm">
                  <FaCheck className="text-[#70cf98]" />
                  <p className="text-gray-800 text-sm">
                    Orchestrated failover/drills
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Automated cost savings - Takes up 7 columns */}
          <div className="bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-5">
            <h2 className="text-xl font-semibold mb-2 mt-2 text-[#0F0E47]">
              Automated cost savings
            </h2>
            <p className="text-[#4B5563] text-sm max-w-[350px]">
              Reduce storage and compute costs automatically — with N2WS
              Resource Control, storage-optimized archiving and ZeroEBS.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <div className="bg-white rounded-lg py-5 px-4 shadow-sm flex-[1.3]">
                <p className="text-gray-600 text-xs">Compute savings</p>
                <p className="text-[#0F0E47] text-xl font-bold">
                  $1,248<span className="text-gray-600">.75</span>
                </p>
              </div>
              <div className="bg-white rounded-lg py-5 px-4 shadow-sm flex-1">
                <p className="text-gray-600 text-xs">Storage savings</p>
                <p className="text-[#0F0E47] text-xl font-bold">98%</p>
              </div>
            </div>
          </div>

          {/* Data sovereignty and security - Takes up 5 columns */}
          <div className="bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-5 ">
            <h2 className="text-xl font-semibold text-[#0F0E47]">
              Data sovereignty and security
            </h2>
            <p className="text-[#4B5563] mb-6 text-sm">
              Reduce your attack surface. Get total control over your
              environment with N2WS, for complete peace of mind.
            </p>

            <div className="bg-white rounded-full py-2 px-4 shadow-sm mb-4">
              <p className="text-gray-800 text-sm">
                N2WS' server belongs to you—it's not shared
              </p>
            </div>

            <div className="flex justify-between items-center px-6">
              <Image src={FR} alt="Government Certification" />
              <Image src={container} alt="FR Logo" />
              <Image src={container1} alt="Security Logo" />
              <Image src={NLST} alt="NIST Logo" />
            </div>
          </div>

          {/* Multi-cloud management - Takes up 7 columns */}
          <div className="bg-[#8686AC] p-6 rounded-lg shadow-sm md:col-span-7 ">
            <div className="flex gap-2">
              <div>
                <h2 className="text-xl font-semibold text-[#0F0E47]">
                  Multi-cloud management
                </h2>
                <p className="text-[#4B5563] mb-4 text-sm">
                  Easily manage all backup & recovery policies in different
                  accounts, regions, and clouds—in one console.
                </p>

                <div className="space-y-3 mb-4">
                  <div className="bg-white rounded-full py-2 px-4 shadow-sm">
                    <p className="text-gray-800 text-sm">
                      Built for easy multi-tenancy
                    </p>
                  </div>
                  <div className="bg-white rounded-full py-2 px-4 shadow-sm">
                    <p className="text-gray-800 text-sm">
                      Easy audit reports and API
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image src={Bar} alt="Bar Graph" className="" />
              </div>
            </div>
          </div>
        </main>
      </ContainerScroll>
    </div>
  );
}
