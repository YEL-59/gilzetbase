import MagazineCard from "./MagazineCard";

const articles = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fashion Photography",
    title: "The Art of Storytelling Through Style",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Portraits",
    title: "Capturing Emotion and Humanity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Natural Light",
    title: "The Photographer's Ultimate Tool",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
    {
    id: 4,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fashion Photography",
    title: "The Art of Storytelling Through Style",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Portraits",
    title: "Capturing Emotion and Humanity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus neque egestas leo pellentesque faucibus ut enim.",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800",
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