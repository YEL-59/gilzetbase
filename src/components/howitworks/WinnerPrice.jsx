import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import BannerBg from "../../assets/hero/banner.png";
import FirstPrizeImg from "../../assets/hero/first.png";
import SecondPrizeImg from "../../assets/hero/secound.png";
import ThirdPrizeImg from "../../assets/hero/thired.png";
import FourthPrizeImg from "../../assets/hero/fourth.png";

const WinnerPrice = () => {
  const prizes = [
    {
      rank: "1st",
      icon: "🏆",
      image: FirstPrizeImg,
      text: "1st Prize: €1,000",
    },
    {
      rank: "2nd",
      icon: "🏅",
      image: SecondPrizeImg,
      text: "2nd Prize: €500",
    },
    {
      rank: "3rd",
      icon: "🎖️",
      image: ThirdPrizeImg,
      text: "3rd Prize: €200",
    },
    {
      rank: "4th-10th",
      icon: "🏵️",
      image: FourthPrizeImg,
      text: "4th → 10th: €100 each",
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

      <div className="relative max-w-6xl mx-auto">
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
              className="overflow-hidden border-none shadow-sm bg-white"
            >
              <div className="flex flex-col items-center p-6">
                <img
                  src={prize.image}
                  alt={prize.text}
                  className="w-32 h-32 object-contain mb-4"
                />
                {/* Prize Text with Icon */}
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-lg">{prize.icon}</span>
                  <span className="font-semibold text-sm">{prize.text}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* All Winners Receive Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            All winners receive
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#C4A24C] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#C4A24C]"></div>
                </div>
                <span className="text-gray-700 text-sm">{benefit}</span>
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
