import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import heroBg from '../../../assets/video/blogDetails bg.png';
import { useGetMagazineDetails, useGetMagazinesByCategory } from '@/hooks/magazine.hook';

const MagazineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: magazineData, isLoading, isError } = useGetMagazineDetails(id);
  const magazine = magazineData?.data;

  // Fetch popular articles from the same category
  const { data: popularData } = useGetMagazinesByCategory(magazine?.category_id);
  const popularArticles = popularData?.data?.data || [];

  const handleArticleClick = (articleId) => {
    navigate(`/megazine/${articleId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading article...</div>
      </div>
    );
  }

  if (isError || !magazine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Failed to load article.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden">
        <img
          src={magazine.feature_image || heroBg}
          alt={magazine.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl Playfair md:text-5xl lg:text-6xl font-bold tracking-wider mb-3 text-[#FEFEFE]">
              {magazine.title}
            </h1>
            <p className="text-sm md:text-base tracking-wide">
              {magazine.category?.name}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Article Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-900">
              {magazine.title}
            </h2>

            {/* Featured Image - Use first image from gallery or feature image */}
            <div className="mb-8 rounded-lg overflow-hidden flex flex-col gap-4">
              <img
                src={magazine.feature_image}
                alt={magazine.title}
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Gallery Images if any */}
              {magazine.images?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {magazine.images.map((img, index) => (
                    <img key={index} src={img} alt={`${magazine.title} gallery ${index}`} className="w-full h-32 object-cover rounded-md" />
                  ))}
                </div>
              )}
            </div>

            {/* Article Section */}
            <div className="mb-8">
              <div
                className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed magazine-content"
                dangerouslySetInnerHTML={{ __html: magazine.description }}
              />
            </div>
          </div>

          {/* Right Column - Popular Articles */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 border-b pb-2">
                Popular articles
              </h3>

              <ul className="space-y-3 mb-8">
                {popularArticles.filter(art => art.id !== parseInt(id)).slice(0, 8).map((article) => (
                  <li key={article.id}>
                    <button
                      onClick={() => handleArticleClick(article.id)}
                      className="text-gray-700 hover:text-[#CAA844] text-sm transition-colors text-left flex items-start w-full group"
                    >
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-400 group-hover:bg-[#CAA844] rounded-full flex-shrink-0"></span>
                      <span className="line-clamp-2">{article.title}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Related Images */}
              <div className="space-y-4">
                {popularArticles.filter(art => art.id !== parseInt(id)).slice(0, 2).map((article) => (
                  <div key={article.id} className="rounded-lg overflow-hidden shadow-md group">
                    <img
                      src={article.feature_image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => handleArticleClick(article.id)}
                    />
                    <div className="p-3 bg-white">
                      <h4 className="text-sm font-semibold line-clamp-1">{article.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineDetails;
