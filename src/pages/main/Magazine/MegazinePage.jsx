import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import bgVideo from '../../../assets/video/eyeBlinkingVideo.mp4'
import { useGetMagazineCategories, useGetMagazinesByCategory } from '@/hooks/magazine.hook';

const MegazinePage = () => {
  const navigate = useNavigate();
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const { data: categoriesData, isLoading: isCategoriesLoading } = useGetMagazineCategories();
  const categories = categoriesData?.data?.data || [];

  useEffect(() => {
    if (categories.length > 0 && !activeCategoryId) {
      setActiveCategoryId(categories[0].id);
    }
  }, [categories, activeCategoryId]);

  const { data: magazinesData, isLoading: isMagazinesLoading } = useGetMagazinesByCategory(activeCategoryId);
  const magazines = magazinesData?.data?.data || [];

  const handleCardClick = (id) => {
    navigate(`/megazine/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 " />
        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl Playfair md:text-5xl lg:text-6xl font-bold tracking-wider mb-3 text-[#FEFEFE] ">
              MAGAZINE / ARTICLES{' '}
            </h1>
            <p className="text-sm md:text-base lg:text-lg tracking-wide text-[#F5F0E6]">
              Featuring artist spotlights, interviews, and curated articles.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-wrap gap-2 md:gap-4  mt-4 overflow-x-auto items-center justify-center border rounded-md w-fit mx-auto px-2 py-2.5">
            {isCategoriesLoading ? (
              <div className="py-2.5 px-4">Loading categories...</div>
            ) : (
              categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`px-4 md:px-6 py-2.5 rounded-md text-sm md:text-base font-medium whitespace-nowrap transition-colors cursor-pointer ${activeCategoryId === category.id
                      ? 'bg-[#CAA844] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {isMagazinesLoading ? (
          <div className="text-center py-20 text-gray-500">Loading magazines...</div>
        ) : magazines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {magazines.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={card.feature_image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <h4 className="text-sm md:text-base text-gray-600 mb-3 line-clamp-1">
                    {card.category?.name}
                  </h4>
                  <div
                    className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">No magazines found in this category.</div>
        )}
      </div>
    </div>
  );
};

export default MegazinePage;
