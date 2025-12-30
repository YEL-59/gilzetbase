import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import bgVideo from '../../../assets/video/eyeBlinkingVideo.mp4'

const MegazinePage = () => {
  const [activeTab, setActiveTab] = useState('Tech & Style');
  const navigate = useNavigate();

  const tabs = [
    'Tech & Style',
    'Fashion',
    'Interviews',
    'Tutorials',
    'Creative',
  ];

 const magazineData = {
    'Tech & Style': [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
        title: 'Fashion Photography',
        subtitle: 'The Art of Storytelling Through Style',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
        title: 'Portraits',
        subtitle: 'Capturing Emotion and Humanity',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
        title: 'Natural Light',
        subtitle: "The Photographer's Greatest Tool",
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea9c3d5a?w=800&q=80',
        title: 'Smart Wearables',
        subtitle: 'Technology Meets Fashion',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        title: 'Sneaker Culture',
        subtitle: 'The Intersection of Tech and Style',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
        title: 'Digital Fashion',
        subtitle: 'Virtual Clothing for the Metaverse',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
    ],
    'Fashion': [
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
        title: 'Runway Trends',
        subtitle: 'Spring Summer 2025 Collections',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
        title: 'Street Style',
        subtitle: 'Urban Fashion Movements',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
        title: 'Haute Couture',
        subtitle: 'The Art of High Fashion',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
        title: 'Sustainable Fashion',
        subtitle: 'Eco-Friendly Design Choices',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 11,
        image: 'https://images.unsplash.com/photo-1558769132-92e717d613f2?w=800&q=80',
        title: 'Minimalist Style',
        subtitle: 'Less is More in Modern Fashion',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 12,
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
        title: 'Vintage Revival',
        subtitle: 'Retro Styles Making a Comeback',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
    ],
    'Interviews': [
      {
        id: 13,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
        title: 'Designer Spotlight',
        subtitle: 'A Conversation with Emma Chen',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 14,
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80',
        title: 'Photographer Stories',
        subtitle: 'Behind the Lens with Marcus Cole',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 15,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        title: 'Model Talks',
        subtitle: 'Life on the Runway',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 16,
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
        title: 'Editors Choice',
        subtitle: 'Fashion Week Highlights',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 17,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
        title: 'Creative Director',
        subtitle: 'Vision and Innovation',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 18,
        image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&q=80',
        title: 'Industry Leaders',
        subtitle: 'Shaping the Future of Fashion',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
    ],
    'Tutorials': [
      {
        id: 19,
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        title: 'Lighting Techniques',
        subtitle: 'Master Studio Photography',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 20,
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
        title: 'Color Grading',
        subtitle: 'Post-Processing for Fashion',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 21,
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
        title: 'Composition Guide',
        subtitle: 'Creating Compelling Images',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 22,
        image: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=800&q=80',
        title: 'Posing Tips',
        subtitle: 'Directing Models Effectively',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 23,
        image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
        title: 'Styling Basics',
        subtitle: 'Building the Perfect Look',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 24,
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
        title: 'Equipment Setup',
        subtitle: 'Essential Gear for Beginners',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
    ],
    'Creative': [
      {
        id: 25,
        image: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&q=80',
        title: 'Abstract Fashion',
        subtitle: 'Pushing Creative Boundaries',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 26,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        title: 'Conceptual Photography',
        subtitle: 'Art Meets Fashion',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 27,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        title: 'Editorial Excellence',
        subtitle: 'Storytelling Through Images',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 28,
        image: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800&q=80',
        title: 'Experimental Styles',
        subtitle: 'Breaking Traditional Rules',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 29,
        image: 'https://images.unsplash.com/photo-1502675135487-e971002a6adb?w=800&q=80',
        title: 'Artistic Vision',
        subtitle: 'Developing Your Unique Style',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
      {
        id: 30,
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
        title: 'Color Theory',
        subtitle: 'Creating Visual Harmony',
        description: 'Lorem ipsum dolor sit amet consectetur. Facilisis libero sapien sit in malesuada facilisis sit risus.',
      },
    ],
  };


  const handleCardClick = (id) => {
    navigate(`/megazine/${id} `);
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
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2.5 rounded-md text-sm md:text-base font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#CAA844] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {magazineData[activeTab]?.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <h4 className="text-sm md:text-base text-gray-600 mb-3">
                  {card.subtitle}
                </h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegazinePage;
