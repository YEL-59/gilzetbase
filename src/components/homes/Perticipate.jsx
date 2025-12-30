import React from "react";

const Perticipate = () => {
  return (
    <>
      <div>
        <div className="min-h-screen bg-[#f5f1ed] py-24">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-4xl font-light text-[#1a1a1a] mb-20 tracking-tight">
              WHY PARTICIPATE?
            </h2>

            <div className="mb-20">
              <div className="flex gap-12 items-start justify-center ">
                <div className="flex-2">
                  <img
                    src="https://images.pexels.com/photos/2773356/pexels-photo-2773356.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                    alt="Gallery exhibition"
                    className="w-full h-72 object-cover rounded-3xl"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center ">
                  <h3 className="text-2xl font-light text-[#1a1a1a] mb-6 tracking-tight">
                    International visibility
                  </h3>
                  <p className="text-gray-700 font-light leading-relaxed text-base">
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

            <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/2310690/pexels-photo-2310690.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                    alt="Artistic recognition"
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-light text-[#1a1a1a] mb-4 text-center tracking-tight">
                  Artistic
                  <br />
                  recognition
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed text-center">
                  Lorem ipsum dolor sit amet consectetur. Faucibus tempus aenean
                  dis pellentesque facilis ex enim. Pellentesque justo integer.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                    alt="Start for free"
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-light text-[#1a1a1a] mb-4 text-center tracking-tight">
                  Start for free
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed text-center">
                  Lorem ipsum dolor sit amet consectetur. Faucibus tempus aenean
                  dis pellentesque facilis ex enim. Pellentesque justo integer.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                    alt="Publication"
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-light text-[#1a1a1a] mb-4 text-center tracking-tight">
                  Publication in
                  <br />
                  international magazines
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed text-center">
                  Lorem ipsum dolor sit amet consectetur. Faucibus tempus aenean
                  dis pellentesque facilis ex enim. Pellentesque justo integer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perticipate;
