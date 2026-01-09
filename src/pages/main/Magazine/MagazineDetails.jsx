import React from 'react';
import heroBg from '../../../assets/video/blogDetails bg.png';

const MagazineDetails = () => {
  // Sample popular articles
  const popularArticles = [
    { id: 1, title: "The Photographer's Ultimate Tool" },
    { id: 2, title: 'Capturing Emotion and Humanity' },
    { id: 3, title: 'Capturing Emotion and Humanity' },
    { id: 4, title: 'Capturing Emotion and Humanity' },
    { id: 5, title: 'Capturing Emotion and Humanity' },
    { id: 6, title: 'Capturing Emotion and Humanity' },
    { id: 7, title: "The Photographer's Ultimate Tool" },
    { id: 8, title: "The Photographer's Ultimate Tool" },
  ];

  const handleArticleClick = (id) => {
    console.log(`Navigate to article ${id}`);
    // In your app, use: navigate(`/magazine/${id}`)
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden">
        <img
          src={heroBg}
          alt="Article Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl Playfair md:text-5xl lg:text-6xl font-bold tracking-wider mb-3 text-[#FEFEFE]">
              The Art of Storytelling Through Style
            </h1>
            <p className="text-sm md:text-base tracking-wide">
              Sapien quis sed sollicitu massa consectetur.
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
              The Art of Storytelling Through Style
            </h2>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden h-[250px] md:h-[350px] lg:h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80"
                alt="Fashion Photography"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Section */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                Fashion Photography
              </h3>

              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Interdum enim nisl
                  eget enim etiam tempor commodo orci. Habitasse velit nibh nec
                  in turpis nibeger proin diam. Egestas velit fells arcu
                  fringilla sit. Tellus lectus consectetur iaculis ultrices
                  scelerisque amet egestas risus blandit.
                </p>

                <p>
                  Enim arcu dictum faucibus in diam et feugiat posuere. Ultrices
                  vitae egestas tortor fames enim tellus orci ut. Id habitant
                  purus fringilla diam arcu vitae in arcu mauris. Vitae pharetra
                  pharelius egestas sapien fermentum tellus ac. Venenatis
                  sagittis amet vel tincidunt posuere eu. Eu vulputate sit
                  plcerat sapien tortor nisl nam nulla sollicitudin.
                  Pellentesque adipiscing fringilla massa libero iaculis orci
                  feugiat pulvinarque.
                </p>

                <p>
                  Arcu vitae aliquet non elit consequat in ac tempus. Ipsum in
                  tortor arci vestibulum consectetur eurabitor. Non pretium nunc
                  erat turpis pulvinar in proin vulputate sollicitudin. Turpis
                  tincidunt tempus nunc et rutrum adipiscing in mauris elit.
                  Luctus etan mattis eni consectetur eget eu volutpat. Natoque
                  amet tristique est lobortis. Sit sem ac nisl magna in
                  placerat. Et vestibulum amet non condmentum sit.
                </p>

                <p>
                  Nisl volutpat fermentum pellentesque non egeslis nielli nisl.
                  Nisl tellus iuifiend denec egestas netus ornare. Sed mattis
                  nunc cursus in morbi. Mattis orci sapien quis magna vel. Nunc
                  imperdiet suspendisse porta posuere vulputate pellentesque
                  quis mauris odio. In duis amet volutpat vulputate nunc a sed.
                  Eu ultricies nunc quisque et conctius enim. Fringilla magna
                  faucibus odic velit odio massa nisl ornare. Ipsum scelerisque
                  viverra quam tellus nunc nibh eget tincidunt. Cras mollis
                  auctor dolor pretium nisl risus non. Nunc eros diam vitae
                  ultrices id lacus tristique. Ornare tristique accumsan ac in
                  mattis.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Popular Articles */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
                Popular articles
              </h3>

              <ul className="space-y-3 mb-8">
                {popularArticles.map((article) => (
                  <li key={article.id}>
                    <button
                      onClick={() => handleArticleClick(article.id)}
                      className="text-gray-700 hover:text-gray-900 text-sm transition-colors text-left flex items-start w-full"
                    >
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                      <span>{article.title}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Related Images */}
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                    alt="Related Article"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleArticleClick(2)}
                  />
                </div>

                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                    alt="Related Article"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleArticleClick(3)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineDetails;
