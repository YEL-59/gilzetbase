import React from "react";
import { useGetHero } from "../../../hooks/hero.hook";
import { useGetAboutPage } from "../../../hooks/aboutPage.hook";

// --- Utility Components for consistent styling ---
const SectionWrapper = ({ children, className = "" }) => (
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
const AboutHero = () => {
  const { data: heroData, isLoading } = useGetHero("aboutPage");

  const heroContent = heroData?.[0] || {};
  const title =
    heroContent.title || "Global Photography, Fashion & Creative Awards";
  const subtitle =
    heroContent.description ||
    "Art Vision Awards (AVA) is a leading international photography and fashion awards platform, celebrating global excellence in visual arts, creative expression, and contemporary storytelling.";

  if (isLoading) {
    return (
      <div
        className="pt-20 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(97deg, rgba(234, 217, 181, 0.69) 7.82%, rgba(247, 247, 246, 0.69) 59.73%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <SectionWrapper className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-2/3">
            <p className="text-gray-500">Loading...</p>
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <div
      className="pt-20 pb-12 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(97deg, rgba(234, 217, 181, 0.69) 7.82%, rgba(247, 247, 246, 0.69) 59.73%), url('${heroContent.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <SectionWrapper className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl Georgia text-gray-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-[#f7f7f7] text-xl mb-6 italic">
            Where Art Meets Vision
          </p>
          <p className="text-gray-600 max-w-xl leading-relaxed">{subtitle}</p>
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
};

// --- 2. AboutAVA ---
const AboutAVA = () => {
  const { data: aboutData, isLoading } = useGetAboutPage("about_ava");
  const { data: founderData, isLoading: founderLoading } =
    useGetAboutPage("founder_info");

  const aboutContent = aboutData?.[0] || {};
  const founderContent = founderData?.[0] || {};

  const title = aboutContent.title || "Art Vision Awards";
  const description =
    aboutContent.description ||
    "Art Vision Awards (AVA) is a leading international platform dedicated to celebrating photography, fashion imagery, and visual storytelling across the globe. Conceived for artists, image-makers, and creative teams working at the highest level, AVA highlights work that is conceptually strong, emotionally resonant, and visually iconic.\n\nBorn from the intersection of editorial culture, luxury aesthetics, and cutting-edge creative direction, AVA exists to spotlight the most compelling voices shaping how we see style, identity, and contemporary life. Each edition connects emerging and established talents with a discerning global audience, fostering recognition, collaboration, and long-term relevance in today's fast-moving visual culture.";

  const founderTitle = founderContent.title || "Founded by Gil Zetbase";
  const founderDesc =
    founderContent.description ||
    "Photographer, art director and creative consultant, AVA highlights the world's most visionary artists whose images embody beauty, innovation, and emotion.";
  const founderImg =
    founderContent.image ||
    "https://gilzetbase.thesyndicates.team/uploads/aboutpage/founder_info/hCfBPfXulX_1768395514.jpg";

  if (isLoading || founderLoading) {
    return (
      <SectionWrapper className="flex flex-col md:flex-row gap-16">
        <div className="md:w-2/3">
          <p className="text-gray-500">Loading...</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="flex flex-col md:flex-row gap-16">
      <div className="md:w-2/3">
        <GoldSubheading>About AVA</GoldSubheading>
        <h2 className="text-3xl font-serif mb-6 Georgia">{title}</h2>
        <div className="space-y-4 text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-6 tracking-[0.16px] ">
          {description.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
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
            <h4 className="font-bold text-gray-900">{founderTitle}</h4>
            <p className="text-xs text-gray-500 mt-2 leading-tight">
              {founderDesc}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

// --- 3. Location ---
const Location = () => {
  const { data: locationData, isLoading } = useGetAboutPage("location_details");

  const locationContent = locationData?.[0] || {};
  const title = locationContent.title || "Born on the French Riviera";
  const description =
    locationContent.description ||
    "Drawing inspiration from the timeless elegance of the Mediterranean coast, AVA carries the spirit of European art history into the modern digital era.";

  if (isLoading) {
    return (
      <div className="px-6">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative h-[328px] flex items-center px-12">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
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
          <h2 className="text-4xl font-serif mb-4">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

// --- 4. OurMission ---
const OurMission = () => {
  const { data: missionData, isLoading } = useGetAboutPage("purpose");

  const missionContent = missionData?.[0] || {};
  const title = missionContent.title || "Our mission";
  const subTitle = missionContent.sub_title || "Creative fields we celebrate";
  const description =
    missionContent.description ||
    "Our mission is to foster a community where creativity knows no bounds. We aim to empower photographers and artists by providing them with global visibility and professional recognition. Through our annual awards, we set the standard for excellence in the visual arts.";
  const categories = missionContent.tag || [
    "Fashion photography",
    "Fine Art photography",
    "Editorial work",
    "Digital creators",
    "Beauty",
    "Documentary",
    "Styling",
    "Social",
  ];

  if (isLoading) {
    return (
      <SectionWrapper>
        <p className="text-gray-500">Loading...</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <GoldSubheading>Mission</GoldSubheading>
      <h2 className="text-4xl font-serif mb-8">{title}</h2>
      <p className="text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-6 tracking-[0.16px] max-w-4xl mb-10 ">
        {description}
      </p>
      <h3 className="text-[#0A0A0A] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-[24px] mb-4">
        {subTitle}
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
  const { data: whyArtData, isLoading } = useGetAboutPage("art_vision");

  const whyArtContent = whyArtData?.[0] || {};
  const title = whyArtContent.title || "Why Art Vision Awards Stands Out";
  const features = whyArtContent.cards || [
    {
      title: "International visibility",
      description: "Reach a global network of art directors, editors, brands,and galleries who are actively seeking new voices and visual languages.",
    },
    {
      title: "Recognized global competition",
      description: "A curated, high-level competition structure that emphasizes artistic quality, innovation, and narrative depth over volume. stories that blend commercial appeal with artistic integrity.",
    },
    {
      title: "Open submissions, defined categories",
      description: "From fashion and beauty to editorial concepts, fine art, digital creation, styling, and video - AVA welcomes work across key creative disciplines.",
    },
    {
      title: "Premium presentation",
      description: "Winning and selected projects are showcased within an elegant, editorial environment designed to honor the work and its creators.",
    },
    {
      title: "Exposure to media & industry",
      description: "Opportunities for features across magazines, brands, agencies, and creative platforms seeking refined, original visual content.",
    },
    {
      title: "A platform built for creators",
      description: "Beyond awards, AVA provides an evolving space for long- term recognition, collaboration, and connection within the creative community.",
    },
  ];

  if (isLoading) {
    return (
      <SectionWrapper>
        <p className="text-gray-500">Loading...</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="p-8 border rounded-[16px] bg-white  border-[#D1D5DB] "
          >
            <h3 className="font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 6. OurCoreValues ---
const OurCoreValues = () => {
  const { data: coreValuesData, isLoading } = useGetAboutPage("core_value");

  const coreValuesContent = coreValuesData?.[0] || {};
  const title = coreValuesContent.title || "Our Core Values";
  const values = coreValuesContent.cards || [
    {
      title: "Vision",
      description: "Showcasing innovative perspectives that influence tomorrow's artistic direction.",
    },
    {
      title: "Emotion",
      description: "Celebrating powerful visual storytelling that connects creators and audiences across cultures.",
    },
    {
      title: "Global",
      description: "Uniting artists from every country and building a dynamic international creative network.",
    },
    {
      title: "Excellence",
      description: "Maintaining the highest standards in photography, fashion imagery, and visual creation.",
    },
  ];

  if (isLoading) {
    return (
      <SectionWrapper>
        <p className="text-gray-500">Loading...</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="">
      <GoldSubheading>Why AVA</GoldSubheading>
      <h2 className="text-3xl font-serif mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <div
            key={i}
            className="p-6 border border-[#D1D5DB] bg-[#F7F7F8] rounded-[16px]"
          >
            <h4 className="font-bold mb-2">{v.title}</h4>
            <p className="text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-[normal]">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

// --- 7. PhotoCompetition ---
const PhotoCompetition = () => {
  const { data: competitionData, isLoading } = useGetAboutPage("competition");

  const competitionContent = competitionData?.[0] || {};
  const title = competitionContent.title || "More Than an International Photo Competition";
  const description = competitionContent.description || "Beyond the accolades, AVA is a global movement. We host exhibitions in major art capitals, publish annual catalogs of winning works, and provide a network for artists to collaborate across borders. It is a home for the bold, the visionary, and the storytellers of tomorrow.";
  const images = competitionContent.sub_image || [
    "https://images.unsplash.com/photo-1554941068-a252680d25d9?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
  ];

  if (isLoading) {
    return (
      <SectionWrapper className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-2/3">
          <p className="text-gray-500">Loading...</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-2/3">
        <GoldSubheading>Why AVA</GoldSubheading>
        <h2 className="text-4xl font-serif mb-6">
          {title}
        </h2>
        <p className="text-[#565E69] font-[Inter] text-[15px] md:text-[16px] not-italic font-normal leading-6 tracking-[0.16px] ">
          {description}
        </p>
      </div>
      <div className="md:w-1/3 flex gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className={`${idx === 0 ? 'w-1/2' : 'w-1/2 mt-8'} h-64 object-cover rounded-xl`}
            alt={`Gallery ${idx + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

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
