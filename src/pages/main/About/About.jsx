import React from 'react';
import founderImg from '../../../assets/video/founder.jpg'

// --- Utility Components for consistent styling ---
const SectionWrapper = ({ children, className = '' }) => (
  <section className={`max-w-7xl mx-auto px-6 py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const GoldSubheading = ({ children }) => (
  <span className="text-[#CAA844] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-[normal] tracking-widest uppercase mb-4 block">
    {children}
  </span>
);

// --- 1. AboutHero ---
const AboutHero = () => (
  <div className="bg-[linear-gradient(97deg,rgba(234,217,181,0.69)_7.82%,rgba(247,247,246,0.69)_59.73%)] pt-20 pb-12">
    <SectionWrapper className="flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-2/3">
        <h1 className="text-4xl md:text-6xl Georgia text-gray-900 leading-tight mb-6">
          Global Photography, Fashion & Creative Awards
        </h1>
        <p className="text-[#C5A059] text-xl mb-6 italic">
          Where Art Meets Vision
        </p>
        <p className="text-gray-600 max-w-xl leading-relaxed">
          Art Vision Awards (AVA) is a leading international photography and
          fashion awards platform, celebrating global excellence in visual arts,
          creative expression, and contemporary storytelling.
        </p>
      </div>
      <div className="md:w-1/3   border-[rgba(202,168,68,0.39)] bg-[#FFF] [box-shadow:-3px_2px_4px_0_rgba(0,_0,_0,_0.13)] p-8 rounded-xl  ">
        <p className="text-[#565E69] font-[Inter] text-[14px] not-italic font-normal leading-[normal] mb-4">
          A Global Editorial Stage
        </p>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-sm mb-2">Photography</p>
            <p className="text-xs text-gray-500">
              Fashion, fine art, editorial
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold text-sm mb-2">Creative Direction</p>
            <p className="text-xs text-gray-500">Styling, beauty, makeup</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
);

// --- 2. AboutAVA ---
const AboutAVA = () => (
  <SectionWrapper className="flex flex-col md:flex-row gap-16">
    <div className="md:w-2/3">
      <GoldSubheading>About AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-6 Georgia">Art Vision Awards</h2>
      <div className="space-y-4 text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-6 tracking-[0.16px] ">
        <p>
          Art Vision Awards (AVA) is a leading international platform dedicated
          to celebrating photography, fashion imagery, and visual storytelling
          across the globe. Conceived for artists, image-makers, and creative
          teams working at the highest level, AVA highlights work that is
          conceptually strong, emotionally resonant, and visually iconic.
        </p>
        <p>
          Born from the intersection of editorial culture, luxury aesthetics,
          and cutting-edge creative direction, AVA exists to spotlight the most
          compelling voices shaping how we see style, identity, and contemporary
          life. Each edition connects emerging and established talents with a
          discerning global audience, fostering recognition, collaboration, and
          long-term relevance in today's fast-moving visual culture.
        </p>
      </div>
    </div>
    <div className="md:w-1/3">
      <p className="text-sm font-medium mb-4">Founder</p>
      <div className="border border-[#CAA844] rounded-2xl p-6 flex items-center justify-center gap-4 bg-white shadow-sm">
        <img
          src={founderImg}
          alt="Founder"
          className="w-34 h-32 rounded-lg object-cover grayscale"
        />
        <div>
          <h4 className="font-bold text-gray-900">Founded by Gil Zetbase</h4>
          <p className="text-xs text-gray-500 mt-2 leading-tight">
            Photographer, art director and creative consultant, AVA highlights
            the world’s most visionary artists whose images embody beauty,
            innovation, and emotion.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

// --- 3. Location ---
const Location = () => (
  <div className="px-6 ">
    <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative h-[328px] flex items-center px-12 ">
      <img
        src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        alt="French Riviera"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
      <div className="relative z-10 max-w-lg">
        <GoldSubheading>Location</GoldSubheading>
        <h2 className="text-4xl font-serif mb-4">Born on the French Riviera</h2>
        <p className="text-gray-700">
          Drawing inspiration from the timeless elegance of the Mediterranean
          coast, AVA carries the spirit of European art history into the modern
          digital era.
        </p>
      </div>
    </div>
  </div>
);

// --- 4. OurMission ---
const OurMission = () => {
  const categories = [
    'Fashion photography',
    'Fine Art photography',
    'Editorial work',
    'Digital creators',
    'Beauty',
    'Documentary',
    'Styling',
    'Social',
  ];
  return (
    <SectionWrapper>
      <GoldSubheading>Mission</GoldSubheading>
      <h2 className="text-4xl font-serif mb-8">Our mission</h2>
      <p className="text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-6 tracking-[0.16px] max-w-4xl mb-10 ">
        Our mission is to foster a community where creativity knows no bounds.
        We aim to empower photographers and artists by providing them with
        global visibility and professional recognition. Through our annual
        awards, we set the standard for excellence in the visual arts.
      </p>
      <h3 className="text-[#0A0A0A] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-[24px] mb-4">
        Creative fields we celebrate
      </h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-5 py-2.5 rounded-full border border-transparent bg-[#F2F0F0] text-xs text-gray-500 hover:bg-gray-50 hover:border-[#F2F0F0] cursor-pointer transition"
          >
            {cat}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 5. WhyArt (Mission Features) ---
const WhyArt = () => {
  const features = [
    {
      title: 'International visibility',
      desc: 'Reach a global network of art directors, editors, brands,and galleries who are actively seeking new voices and visual languages.',
    },
    {
      title: 'Recognized global competition',
      desc: 'A curated, high-level competition structure that emphasizes artistic quality, innovation, and narrative depth over volume. stories that blend commercial appeal with artistic integrity.',
    },
    {
      title: 'Open submissions, defined categories',
      desc: 'From fashion and beauty to editorial concepts, fine art, digital creation, styling, and video - AVA welcomes work across key creative disciplines.',
    },
    {
      title: 'Premium presentation',
      desc: 'Winning and selected projects are showcased within an elegant, editorial environment designed to honor the work and its creators.',
    },
    {
      title: 'Exposure to media & industry',
      desc: 'Opportunities for features across magazines, brands, agencies, and creative platforms seeking refined, original visual content.',
    },
    {
      title: 'A platform built for creators',
      desc: 'Beyond awards, AVA provides an evolving space for long- term recognition, collaboration, and connection within the creative community.',
    },
  ];
  return (
    <SectionWrapper>
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-12">
        Why Art Vision Awards Stands Out
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="p-8 border rounded-[16px] bg-white  border-[#D1D5DB] "
          >
            <h3 className="font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 6. OurCoreValues ---
const OurCoreValues = () => {
  const values = [
    {
      title: 'Vision',
      desc: 'Showcasing innovative perspectives that influence tomorrow’s artistic direction.',
    },
    {
      title: 'Emotion',
      desc: 'Celebrating powerful visual storytelling that connects creators and audiences across cultures.',
    },
    {
      title: 'Global',
      desc: 'Uniting artists from every country and building a dynamic international creative network.',
    },
    {
      title: 'Excellence',
      desc: 'Maintaining the highest standards in photography, fashion imagery, and visual creation.',
    },
  ];
  return (
    <SectionWrapper className="">
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-12">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <div key={i} className="p-6 border border-[#D1D5DB] bg-[#F7F7F8] rounded-[16px]">
            <h4 className="font-bold mb-2">{v.title}</h4>
            <p className="text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-[normal]">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 7. PhotoCompetition ---
const PhotoCompetition = () => (
  <SectionWrapper className="flex flex-col md:flex-row gap-12 items-center">
    <div className="md:w-2/3">
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-4xl font-serif mb-6">
        More Than an International Photo Competition
      </h2>
      <p className="text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-6 tracking-[0.16px] ">
        Beyond the accolades, AVA is a global movement. We host exhibitions in
        major art capitals, publish annual catalogs of winning works, and
        provide a network for artists to collaborate across borders. It is a
        home for the bold, the visionary, and the storytellers of tomorrow.
      </p>
    </div>
    <div className="md:w-1/3 flex gap-4">
      <img
        src="https://images.unsplash.com/photo-1554941068-a252680d25d9?w=400&h=500&fit=crop"
        className="w-1/2 h-64 object-cover rounded-xl"
        alt="Gallery 1"
      />
      <img
        src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
        className="w-1/2 h-64 object-cover rounded-xl mt-8"
        alt="Gallery 2"
      />
    </div>
  </SectionWrapper>
);

// --- MAIN PAGE ---
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
      <AboutHero />
      <AboutAVA />
      <Location />
      <OurMission />
      <WhyArt />
      <OurCoreValues />
      <PhotoCompetition />
    </div>
  );
}
