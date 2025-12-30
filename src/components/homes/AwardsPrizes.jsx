import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Medal } from "lucide-react";
import BannerBg from "../../assets/hero/banner.png";
import FirstPrizeImg from "../../assets/hero/first.png";
import SecondPrizeImg from "../../assets/hero/secound.png";
import ThirdPrizeImg from "../../assets/hero/thired.png";
import FourthPrizeImg from "../../assets/hero/fourth.png";
const AwardsPrizes = () => {
  const prizes = [
    {
      rank: "1st",
      icon: "🏆",
      image: FirstPrizeImg,
      text: "1st Prize: €1,000",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      rank: "2nd",
      icon: "🥈",
      image: SecondPrizeImg,
      text: "2nd Prize: €500",
      color: "from-gray-300 to-gray-500",
    },
    {
      rank: "3rd",
      icon: "🥉",
      image: ThirdPrizeImg,
      text: "3rd Prize: €200",
      color: "from-orange-300 to-orange-500",
    },
    {
      rank: "4th-10th",
      icon: "🎖️",
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

      <div className="relative max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-3 tracking-wide uppercase">
            AWARDS & CASH PRIZES
          </h2>
          <p className="text-sm text-gray-600">
            Credibility assistance with trophies and prize money.
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <img src={prize.image} alt="" />
              <CardContent className="p-6">
                {/* Prize Text with Icon */}
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span className="text-xl">{prize.icon}</span>
                  <span className="font-semibold text-sm">{prize.text}</span>
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
