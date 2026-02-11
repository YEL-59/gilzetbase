import React from "react";
import { useGetWhyParticipates } from "../../hooks/home.hook";

const Perticipate = () => {
  const { data: whyParticipateData, isLoading, isError } = useGetWhyParticipates();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F7F6F3] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !whyParticipateData?.status) {
    return null; // Or show an error message
  }

  const participates = whyParticipateData?.data?.data || [];
  const mainFeature = participates[0];
  const gridItems = participates.slice(1);

  return (
    <>
      <div>
        <div className="min-h-screen bg-[#F7F6F3] py-24">
          <div className="container mx-auto px-8">
            <h2 className="text-[#000] text-center font-[Georgia] text-xl md:text-[48px] not-italic font-normal leading-[44px] tracking-[2px] uppercase">
              WHY PARTICIPATE?
            </h2>

            {mainFeature && (
              <div className="mb-20 mt-12">
                <div className="flex flex-col md:flex-row gap-12 items-center justify-center ">
                  <div className="flex-2">
                    <img
                      src={mainFeature.image}
                      alt={mainFeature.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center ">
                    <h3 className="text-start font-[Inter] text-[32px] not-italic font-medium leading-[24px] mb-5 tracking-tight">
                      {mainFeature.title}
                    </h3>
                    <p className="font-[Inter] text-[17px] not-italic font-medium leading-[24px] text-[#565E69]">
                      {mainFeature.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="border border-[#565E69] mb-20"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {gridItems.map((item) => (
                <div className="flex flex-col" key={item.id}>
                  <div className="mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-[16px] border-[1px] border-[solid] border-[var(--border,#D1D5DB)] h-[300px] w-full object-cover"
                    />
                  </div>
                  <h3 className="text-[#000] text-center font-[Inter] text-[25px] not-italic font-medium leading-[40px]">
                    {item.title}
                  </h3>
                  <p className="text-justify font-[Inter] text-[20px] not-italic font-medium leading-[24px] text-[#565E69]">
                    {item.description}
                  </p>
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
