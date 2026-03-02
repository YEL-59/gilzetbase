import image from "../../assets/howitwork.png";
import { useGetHero } from "../../hooks/hero.hook";

const WorkHero = () => {
  const { data: heroData } = useGetHero("howItWork");

  const heroContent = heroData?.[0] || {};
  const title = heroContent.title || "How It Works";
  const subtitle =
    heroContent.description ||
    "A simple, powerful system to showcase artists worldwide";
  const imageUrl = heroContent.image || image;

  return (
    <div className="w-full h-[60vh] md:h-[657px] relative overflow-hidden">
      {/* Background Image */}
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-center text-[#FEFEFE] Georgia text-[40px] not-italic font-bold leading-[normal]">
          {title}
        </h1>
        <p className="text-center text-[#F5F0E6] font-inter text-[20px] font-normal leading-[24px] max-w-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default WorkHero;
