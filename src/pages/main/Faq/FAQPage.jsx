import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import heroBg from "../../../assets/video/faqhero.png";
import { useGetFAQ } from "../../../hooks/faq.hook";

const FAQPage = () => {
  const [openItems, setOpenItems] = useState([0]); // First item open by default
  const { data: faqResponse, isLoading, error } = useGetFAQ(100);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        <img
          src={heroBg}
          alt="FAQ Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl Playfair md:text-5xl lg:text-6xl font-bold tracking-wider mb-3 text-[#FEFEFE]">
              Frequently Asked Questions
            </h1>
            <p className="text-sm md:text-base">
              Your Most Important Questions, Explained
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading FAQs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">
              Failed to load FAQs. Please try again later.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {faqResponse?.data?.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm md:text-base font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && faq.answer && (
                  <div className="px-5 md:px-6 pb-4 md:pb-5 pt-0">
                    <div className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQPage;
