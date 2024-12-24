"use client";
import Image from "next/image";
import { useEffect } from "react";

const Carousal2 = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="relative h-screen text-black"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleIndicators"
          data-twe-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className=" w-full overflow-hidden after:clear-both after:block after:content-[''] bg-black h-screen">
        <div
          className=" relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none h-screen"
          data-twe-carousel-item
        >
          <Image
            src="/images/image1.png"
            className="block w-full h-full object-cover"
            alt="Camera"
            width={1000}
            height={1000}
          />
          <div className="absolute top-60 xs:left-6 lg:left-40  space-y-7">
            <div className="space-y-4">
            <h1 className="font-poppins xs:text-xl lg:text-2xl">Women Collection 2018</h1>
            <h2 className="font-playFairDisplay xs:text-3xl lg:text-6xl text-[#333] font-bold ">
                NEW SEASON
              </h2>
            </div>
            <button
              type="button"
              className="   bg-[#717fe0] text-white px-10 py-2 rounded-2xl hover:bg-[#333] transition-all 0.3s ease-linear text-lg font-poppins"
            >
              Shop now
            </button>
          </div>
        </div>

        <div
          className=" float-left -mr-[100%] hidden w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
        >
          <Image
            src="/images/image2.png"
            className="block w-full h-full object-cover"
            alt="Camera"
            width={1000}
            height={800}
          />
          <div className="absolute top-60 xs:left-6 lg:left-40  space-y-7">
            <div className="space-y-4">
              <h1 className="font-poppins xs:text-xl lg:text-2xl">Men Collection 2018</h1>
              <h2 className="font-playFairDisplay xs:text-3xl lg:text-6xl text-[#333] font-bold ">
                NEW SEASON
              </h2>
            </div>
            <button
              type="button"
              className="   bg-[#717fe0] text-white px-10 py-2 rounded-2xl hover:bg-[#333] transition-all 0.3s ease-linear text-lg font-poppins"
            >
              Shop now
            </button>
          </div>
        </div>

        <div
          className=" float-left -mr-[100%] w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          data-twe-carousel-active
        >
          <Image
            src="/images/image3.png"
            className="block w-full h-full object-cover"
            alt="Wild Landscape"
            width={1000}
            height={800}
          />
          <div className="absolute top-60 xs:left-6 lg:left-40  space-y-7">
            <div className="space-y-4">
            <h1 className="font-poppins xs:text-xl lg:text-2xl">Men new-Seasons</h1>
            <h2 className="font-playFairDisplay xs:text-3xl lg:text-6xl text-[#333] font-bold ">
               Jacket & Coats
              </h2>
            </div>
            <button
              type="button"
              className="   bg-[#717fe0] text-white px-10 py-2 rounded-2xl hover:bg-[#333] transition-all 0.3s ease-linear text-lg font-poppins"
            >
              Shop now
            </button>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleIndicators"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleIndicators"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousal2;
