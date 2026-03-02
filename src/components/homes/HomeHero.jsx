
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import BottomDotSvg from "@/assets/svg/BottomDotSvg";
import RoundSvg from "@/assets/svg/RoundSvg";
import { Link } from "react-router";
import { useAuth } from "@/hooks/AuthContext";
import AuthDialog from "@/pages/auth/AuthDialog";

const carouselImages = [
  "https://avatars.mds.yandex.net/get-shedevrum/15102269/img_766586fdd70311efb2d5caf2840a7b5b/orig",
  "https://i.pinimg.com/474x/d5/c1/87/d5c18722936b18e9a211ce9d212a7fe7.jpg",
  "https://avatars.mds.yandex.net/get-shedevrum/16525081/img_55456a6101de11f09a1b06608fe15d8d/orig",
  "https://avatars.mds.yandex.net/get-shedevrum/13758706/img_fc6cf8e5e67a11ef99994e4cdf31d053/orig",
  "https://avatars.mds.yandex.net/get-shedevrum/13787097/img_3d83d21f70f111efbf8046f041e3c814/orig",
  "https://avatars.mds.yandex.net/get-shedevrum/12157372/img_88dd7600b71411efbc892652804b2160/orig",
  "https://i.pinimg.com/736x/fa/b6/4d/fab64d4f5605b473a39366c7b40d8c42.jpg",
];

const HomeHero = () => {
  const { isAuthenticated } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Define logic for 3 different images based on the single index
  const firstSliderIndex = currentIndex;
  const secondSliderIndex = (currentIndex + 1) % carouselImages.length;
  const thirdSliderIndex = (currentIndex + 2) % carouselImages.length;

  return (
    <section className="relative min-h-screen bg-[#272727] w-full overflow-hidden flex items-center pt-16">

      {/* Decorative Assets & Labels (Remaining Same) */}
      <div className="absolute top-[15%] left-[30%] z-10 hidden lg:block">
        {/* <p className="text-[14px] uppercase text-white tracking-[0.4em] rotate-12 opacity-60 font-medium animate-pulse text-red-500 ">Free registration</p> */}

        <p
          className="
    text-[14px]
    uppercase
    tracking-[0.4em]
    rotate-12
    font-medium
    text-[#D8D05A]
    animate-pulse
    drop-shadow-[0_0_10px_rgba(216,208,90,0.9)]
  "
        >
          Free registration
        </p>

      </div>
      <div className="absolute top-[20%] left-[68%] z-10 hidden lg:block">
        <p className="
    text-[14px]
    uppercase
    tracking-[0.4em]
    rotate-12
    font-medium
    text-[#D8D05A]
    animate-pulse
    drop-shadow-[0_0_10px_rgba(216,208,90,0.9)]
  ">Open to all creatives</p>
      </div>
      <div className="absolute bottom-[5%] -left-[2%] z-10 hidden lg:block"><BottomDotSvg /></div>
      <div className="absolute top-[25%] right-[20%] z-10 hidden lg:block"><RoundSvg /></div>
      <div className="absolute bottom-[5%] right-[52%] z-10 hidden lg:block">
        <p className="
    text-[14px]
    uppercase
    tracking-[0.4em]
    rotate-8
    font-medium
    text-[#D8D05A]
    animate-pulse
    drop-shadow-[0_0_10px_rgba(216,208,90,0.9)]
  ">International visibility</p>
      </div>

      <div className="container mx-auto px-8 relative grid grid-cols-12 items-start h-full z-10">

        {/* --- LEFT COLUMN: SLIDER 1 (Semicircle) --- */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
          <div className="w-[350px] aspect-[2/1] overflow-hidden rounded-t-full border-2 border-[#D8D05A] mb-10 relative">
            {carouselImages.map((img, index) => (
              <img
                key={`slider1-${index}`}
                src={img}
                className={`absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-opacity duration-[3000ms] ease-in-out ${index === firstSliderIndex ? "opacity-100" : "opacity-0"
                  }`}
                alt="Semicircle Slider"
              />
            ))}
          </div>

          <h1 className="text-6xl md:text-7xl xl:text-[96px] font-extralight text-[#D8D05A] leading-[0.85] tracking-tighter uppercase mb-12">
            Art Vision <br /> <span>Awards</span>
          </h1>

          <div className="flex gap-5">
            {!isAuthenticated ? (
              <AuthDialog initialMode="login">
                <Button className="bg-[#CAA844] text-white hover:bg-white hover:text-black px-5 py-5 rounded-[7px] text-[11px] uppercase tracking-widest font-bold transition-all duration-300">
                  Submit a Photo
                </Button>
              </AuthDialog>
            ) : (
              <Link to="/submit-photo">
                <Button className="bg-[#CAA844] text-white hover:bg-white hover:text-black px-5 py-5 rounded-[7px] text-[11px] uppercase tracking-widest font-bold transition-all duration-300">
                  Submit a Photo
                </Button>
              </Link>
            )}

            {!isAuthenticated ? (
              <AuthDialog initialMode="register">
                <Button variant="outline" className="border-[#CAA844]/40 text-[#CAA844] bg-transparent hover:bg-[#CAA844] hover:text-black px-5 py-5 rounded-[7px] text-[11px] uppercase tracking-widest transition-all duration-300">
                  Create Account
                </Button>
              </AuthDialog>
            ) : (
              <Link to="/dashboard">
                <Button variant="outline" className="border-[#CAA844]/40 text-[#CAA844] bg-transparent hover:bg-[#CAA844] hover:text-black px-5 py-5 rounded-[7px] text-[11px] uppercase tracking-widest transition-all duration-300">
                  Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* --- CENTER COLUMN: SLIDER 2 (Main Oval) --- */}
        <div className="hidden lg:flex col-span-5 justify-center items-center relative">
          <div className="relative w-full max-w-[420px] h-[700px] aspect-[1/1.4] group">
            <div className="absolute inset-[-15px] border border-[#D8D05A] rounded-full" />
            <div className="w-full h-full rounded-full overflow-hidden border border-[#D8D05A]/10 z-40 relative shadow-2xl shadow-black">
              {carouselImages.map((img, index) => (
                <img
                  key={`slider2-${index}`}
                  src={img}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[3000ms] ease-in-out ${index === secondSliderIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    }`}
                  alt="Main Feature"
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SLIDER 3 (Next Preview) --- */}
        <div className="hidden lg:flex col-span-12 lg:col-span-3 flex flex-col justify-center items-end relative h-full">
          <div className="flex flex-col items-end gap-12 mr-[-10%] xl:mr-[-25%]">
            <p className="hidden lg:block text-[#D8D05A] font-[Inter] text-[40px] font-extralight leading-[58px] tracking-[2px] max-w-sm absolute bottom-[10%] -left-[20%]">
              Where Art Meets Vision
            </p>

            <div className="w-56 xl:w-[350px] absolute bottom-[0%] left-[30%] z-20 aspect-[1/1.5] rounded-full border border-[#D8D05A] p-4 relative bg-black/20 backdrop-blur-sm group cursor-pointer">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {carouselImages.map((img, index) => (
                  <img
                    key={`slider3-${index}`}
                    src={img}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all ${index === thirdSliderIndex ? "opacity-80" : "opacity-0"
                      }`}
                    alt="Next Up"
                  />
                ))}
              </div>
              <div className="absolute -left-8 top-1/2 -rotate-90 text-[10px] tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 transition-opacity text-white">
                Gallery View
              </div>
            </div>
          </div>
        </div>

        {/* Glowing Background Orbs (Remaining Same) */}
        <div className="absolute left-[35%] top-[20%] w-[300px] h-[300px] rounded-full bg-[rgba(216,208,90,0.85)] opacity-20 blur-[64px] hidden lg:block" />
        <div className="absolute left-[35%] top-[70%] w-[300px] h-[300px] rounded-full bg-[rgba(216,208,90,0.85)] opacity-20 blur-[64px] mix-blend-screen hidden lg:block" />
        <div className="absolute right-[2%] top-[40%] w-[300px] h-[300px] rounded-full bg-[rgba(216,208,90,0.85)] opacity-20 blur-[64px] mix-blend-screen  -z-10 hidden lg:block" />
      </div>
    </section >
  );
};

export default HomeHero;