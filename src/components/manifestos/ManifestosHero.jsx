

import image from "../../../src/assets/manifesto/manifesto-bg.jpg"

const ManifestosHero = () => {
    const title = "Manifesto "
    const subtitle = "Art Vision Awards (AVA) is a leading international photography and fashion  awards platform, celebrating global excellence in visual arts, creative  expression, and contemporary storytelling."
  return (
    <div className="w-full h-[60vh] md:h-[657px] relative overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-center text-[#FEFEFE] font-playfair text-[48px] font-medium leading-[56px]">
          {title}
        </h1>
        <p className="text-center text-[#F5F0E6] font-inter text-[20px] font-normal leading-[24px] max-w-xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ManifestosHero;
