import image from "../../assets/howitwork.png";

const WorkHero = () => {
  const title = "How It Works";
  const subtitle = "A simple, powerful system to showcase artists worldwide";
  return (
    <div className="w-full h-[60vh] md:h-[657px] relative overflow-hidden">
      {/* Background Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

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

export default WorkHero;
