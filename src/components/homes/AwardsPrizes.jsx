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
import ForthSvg from "../../assets/svg/ForthSvg";
const AwardsPrizes = () => {
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

  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerBg})` }}
      //   style={{
      //     backgroundImage:
      //       "url(https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80)",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //   }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-amber-50/95 to-amber-100/95"></div> */}

      <div className="relative container mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-[#000] text-center text-[48px] not-italic font-normal leading-[44px] uppercase tracking-[2px] mb-4 Georgia">
            AWARDS & CASH PRIZES
          </h2>
          <p className="text-center font-[Inter] text-[20px] not-italic font-normal leading-[44px] text-[#565E69]">
            Credibility assistance with trophies and prize money.
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
      </div>
    </section>
  );
};

export default AwardsPrizes;
