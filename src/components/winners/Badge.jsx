import React from "react";
import FirstIconSvg from "../../assets/svg/FirstIconSvg";
import SecoundSvg from "../../assets/svg/SecoundSvg";
import ThirdSvg from "../../assets/svg/ThirdSvg";

const Badge = ({ rank }) => {
  const getBadgeIcon = () => {
    switch (rank) {
      case 1:
        return <FirstIconSvg />;
      case 2:
        return <SecoundSvg />;
      case 3:
        return <ThirdSvg />;
      default:
        return null;
    }
  };

  if (!rank || rank < 1 || rank > 3) {
    return null;
  }

  return (
    <div className="absolute top-6 right-6 z-10">
      <div className="w-14 h-14 flex items-center justify-center">
        {getBadgeIcon()}
      </div>
    </div>
  );
};

export default Badge;
