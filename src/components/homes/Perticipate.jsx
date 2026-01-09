import React from "react";
import images from "../../assets/img1.png";
import images1 from "../../assets/img2.png";
import images2 from "../../assets/img3.png";
import images3 from "../../assets/img4.png";

const Perticipate = () => {
  const ajson = [
    {
      id: 1,
      img: images1,
      alt: "Artistic recognition",
      imgClass:
        "rounded-[16px] border-[1px] border-[solid] border-[var(--border,#D1D5DB)]",
      title: "Artistic recognition",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus tempus aenean dis pellentesque facilis ex enim. Pellentesque justo integer.",
      titleClass:
        "text-[#000]  text-center font-[Inter] text-[25px] not-italic font-medium leading-[40px]",
      descClass:
        "text-justify font-[Inter] text-[20px] not-italic font-medium leading-[24px] text-[#565E69]",
    },
    {
      id: 2,
      img: images2,
      alt: "Start for free",
      imgClass:
        "rounded-[16px] border-[1px] border-[solid] border-[var(--border,#D1D5DB)]",
      title: "Start for free",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus tempus aenean dis pellentesque facilis ex enim. Pellentesque justo integer.",
      titleClass:
        "text-[#000]  text-center font-[Inter] text-[25px] not-italic font-medium leading-[40px]",
      descClass:
        "text-justify font-[Inter] text-[20px] not-italic font-medium leading-[24px] text-[#565E69]",
    },
    {
      id: 3,
      img: images3,
      alt: "Publication",
      imgClass:
        "rounded-[16px] border-[1px] border-[solid] border-[var(--border,#D1D5DB)]",
      title: "Publication in\ninternational magazines",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus tempus aenean dis pellentesque facilis ex enim. Pellentesque justo integer.",
      titleClass:
        "text-[#000]  text-center font-[Inter] text-[25px] not-italic font-medium leading-[40px]",
      descClass:
        "text-justify font-[Inter] text-[20px] not-italic font-medium leading-[24px] text-[#565E69]",
    },
  ];

  return (
    <>
      <div>
        <div className="min-h-screen bg-[#F7F6F3] py-24">
          <div className="container mx-auto px-8">
            <h2 className="text-[#000] text-center font-[Georgia] text-xl md:text-[48px] not-italic font-normal leading-[44px] tracking-[2px]">
              WHY PARTICIPATE?
            </h2>

            <div className="mb-20 mt-12">
              <div className="flex flex-col md:flex-row gap-12 items-center justify-center ">
                <div className="flex-2">
                  <img
                    src={
                      images ||
                      "https://images.pexels.com/photos/2773356/pexels-photo-2773356.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                    }
                    alt="Gallery exhibition"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center ">
                  <h3 className="text-start font-[Inter] text-[32px] not-italic font-medium leading-[24px] mb-5 tracking-tight">
                    International visibility
                  </h3>
                  <p className="font-[Inter] text-[17px] not-italic font-medium leading-[24px] text-[#565E69]">
                    Showcase your work to a global audience. Our awards commoda
                    a fringilla hendrerit quam sit. Fringilla diam posuisci
                    vierra arcu. Massa pretium urna consequat dignissim
                    facilisis porta elit. Velit duis anim erat sit facilis.
                    Pulvinar interdum bibendum dapor.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-[#565E69] mb-20"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {ajson.map((item) => (
                <div className="flex flex-col" key={item.id}>
                  <div className="mb-6">
                    <img
                      src={
                        item.img ||
                        (item.id === 1
                          ? "https://images.pexels.com/photos/2310690/pexels-photo-2310690.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                          : item.id === 2
                            ? "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                            : "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=400&h=300")
                      }
                      alt={item.alt}
                      className={item.imgClass}
                    />
                  </div>
                  <h3 className={item.titleClass}>{item.title}</h3>
                  <p className={item.descClass}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perticipate;
