import { Card, CardContent } from "@/components/ui/card";

const MagazineCard = ({ image, category, title, description }) => {
  return (
    <Card className="overflow-hidden p-5 border border-(--color-all) rounded-3xl hover:shadow-md transition-all duration-300 h-full flex flex-col group cursor-pointer bg-[#FFFCF6]">
      <div className="relative h-full ">
        <img
          src={image}
          alt={title}
          className="w-full h-[395px] object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <CardContent className="px-0 flex flex-col flex-1 ">
        <h3 className="text-[#0A0A0A] font-inter text-[32px] font-medium leading-[40px] tracking-[2px]">
          {category}
        </h3>
        <h4 className="text-start text-[#0A0A0A] font-inter text-[20px] font-medium leading-[40px] tracking-[1px]">
            {title}
        </h4>
        <p className="text-justify text-[#565E69] font-inter text-[20px] font-medium leading-[24px]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default MagazineCard;
