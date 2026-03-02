import MagazineCard from "./MagazineCard";

import images7 from "../../assets/img7.png";
import images8 from "../../assets/img8.png";
import images9 from "../../assets/img9.png";

const articles = [
  {
    id: 1,
    image: images7,
    category: "Fashion Photography",
    title: "The Art of Storytelling Through Style",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 2,
    image: images8,
    category: "Portraits",
    title: "Capturing Emotion and Humanity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 3,
    image: images9,
    category: "Natural Light",
    title: "The Photographer's Ultimate Tool",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 4,
    image: images8,
    category: "Fashion Photography",
    title: "The Art of Storytelling Through Style",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 5,
    image: images7,
    category: "Portraits",
    title: "Capturing Emotion and Humanity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 6,
    image: images9,
    category: "Natural Light",
    title: "The Photographer's Ultimate Tool",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
];

const Magazine = () => {
  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wide">
            Magazine / Articles
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Featuring artist spotlights, interviews, and curated articles.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <MagazineCard
              key={article.id}
              image={article.image}
              category={article.category}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-[#C6A45C] hover:bg-[#b08d45] text-white font-medium px-10 py-3 rounded-md transition-all duration-300 uppercase text-sm tracking-wider hover:shadow-lg">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
