import { Calendar, ArrowUpRight } from "lucide-react";

const ArchiveCard = ({ collection }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm">
            <Calendar className="w-4 h-4" />
            <span>{collection.date}</span>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {collection.title}
          </h3>
          <p className="text-sm text-gray-500">{collection.description}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0 mt-1" />
      </div>
    </div>
  );
};

const collections = [
  {
    id: 1,
    title: "Winter Solstice 2024",
    description: "View the top 10 winners from this collections",
    date: "December 2023",
    image:
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    title: "Winter Solstice 2024",
    description: "View the top 10 winners from this collections",
    date: "December 2023",
    image:
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    title: "Winter Solstice 2024",
    description: "View the top 10 winners from this collections",
    date: "December 2023",
    image:
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    title: "Winter Solstice 2024",
    description: "View the top 10 winners from this collections",
    date: "December 2023",
    image:
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    title: "Winter Solstice 2024",
    description: "View the top 10 winners from this collections",
    date: "December 2023",
    image:
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 6,
    title: "Winter Solstice 2024",
    description: "View the top 10 winners from this collections",
    date: "December 2023",
    image:
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const WinnersArchive = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Winners Archive
          </h2>
          <p className="text-gray-600 text-base">
            Explore our history of excellence. A curated collection of past
            contest winners.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <ArchiveCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinnersArchive;
