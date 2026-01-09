import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import BannerBg from "../../assets/hero/banner.png";
import FirstPrizeImg from "../../assets/hero/first.png";
import SecondPrizeImg from "../../assets/hero/secound.png";
import ThirdPrizeImg from "../../assets/hero/thired.png";
import FourthPrizeImg from "../../assets/hero/fourth.png";
import FirstIconSvg from "../../assets/svg/FirstIconSvg";
import SecoundSvg from "../../assets/svg/SecoundSvg";
import ThirdSvg from "../../assets/svg/ThirdSvg";
import ForthSvg from "../../assets/svg/ForthSvg.jsx";
import images from "../../assets/Frame.png";

const WinnerPrice = () => {
  const prizes = [
    {
      rank: "1st",
      icon: <FirstIconSvg />,
      image: FirstPrizeImg,
      text: "1st Prize: €1,000",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      rank: "2nd",
      icon: <SecoundSvg />,
      image: SecondPrizeImg,
      text: "2nd Prize: €500",
      color: "from-gray-300 to-gray-500",
    },
    {
      rank: "3rd",
      icon: <ThirdSvg />,
      image: ThirdPrizeImg,
      text: "3rd Prize: €200",
      color: "from-orange-300 to-orange-500",
    },
    {
      rank: "4th-10th",
      icon: <ForthSvg />,
      image: FourthPrizeImg,
      text: "4th → 10th: €100 each",
      color: "from-blue-200 to-blue-400",
    },
  ];
  const benefits = [
    "Digital certificate",
    "AVA Winner badge",
    "Publication in Winners Gallery",
    "Possible Look book Magazine feature",
  ];

  return (
    <section
      className="relative py-16 px-4"
      style={{
        backgroundImage: `url(${BannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F5F1E8",
      }}
    >
      {/* Cream overlay */}
      <div className="absolute inset-0 bg-[#F5F1E8]/98"></div>

      <div className="relative container mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">
            Winners & Prizes
          </h2>
          <p className="text-sm text-gray-600">
            Celebrating excellence with trophies and prize money.
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className=" bg-white hover:shadow-xl transition-shadow p-0"
            >
              <img
                src={prize.image}
                alt=""
                className="h-[322px] self-stretch [aspect-ratio:195/161]"
              />
              <CardContent className="p-4">
                {/* Prize Text with Icon */}
                <div className="flex items-center justify-center align-middle gap-2 ">
                  <span className="text-xl">{prize.icon}</span>
                  <span className="text-[#1A1A1A] font-[Inter] text-[20px] not-italic font-semibold leading-[26.402px]">
                    {prize.text}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Winners Receive Section */}
        <div className="max-w-4xl ">
          <h3 className="text-[#000] font-[Inter] text-[32px] not-italic font-medium leading-[normal] mb-6">
            All winners receive
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start justify-start gap-3">
                <img src={images} alt="" />
                <span className="text-center font-[Inter] text-[#565E69] text-[24px] not-italic font-normal leading-[normal]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-300">
            <p className="text-xs text-gray-600">
              Premium members receive a physical AVA trophy (Top 3).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnerPrice;
