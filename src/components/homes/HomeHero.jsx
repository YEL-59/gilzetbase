import React from "react";
import { Button } from "../ui/button";
import HeroBg from "../../assets/hero/herobg-img.png";
const HomeHero = () => {
  return (
    <>
      <div>
        {/* here i want to make the img bg img so write necessary css */}
        <div
          className="bg-cover bg-center h-276 max-h-screen w-full "
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <div className=" flex flex-col items-center justify-center h-full text-center pt-20 space-y-6 position-relative -ml-300">
            <h1 className="text-8xl font-light text-(--color-all) leading-tight mb-10 tracking-tight text-start">
              ART VISION
              <br />
              AWARDS
            </h1>

            <div className="pt-6 space-y-3 max-w-xl  text-start flex gap-5 items-start justify-start">
              <Button className="relative overflow-hidden w-full rounded-sm max-w-35 text-white bg-(--color-all) group">
                <span className="relative z-10">Submit a Photo</span>
                <span className="absolute inset-0 bg-gray-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              </Button>

              <Button className="relative overflow-hidden w-full rounded-sm max-w-35 text-gray-300 border border-gray-600 group">
                <span className="relative z-10">Create an Account</span>
                <span className="absolute inset-0 bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
