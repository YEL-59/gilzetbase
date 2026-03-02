import image from "../../../src/assets/categories/category-bg.png"
import { useGetHero } from "../../hooks/hero.hook";

const CategorieHero = () => {
  const { data: heroData, isLoading } = useGetHero("category");

  const heroContent = heroData?.[0] || {};
  const title = heroContent.title || "Fashion Photography";
  const subtitle = heroContent.description || "Fashion, editorial, couture, look book";
  const backgroundImage = heroContent.image || image;

  if (isLoading) {
    return (
      <div className="w-full h-[60vh] md:h-[657px] relative overflow-hidden bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[60vh] md:h-[657px] relative overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-center text-[#FEFEFE] font-playfair text-[48px] font-medium leading-[56px]">
          {title}
        </h1>
        <p className="text-center text-[#F5F0E6] font-inter text-[20px] font-normal leading-[24px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CategorieHero;
