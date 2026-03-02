import Badge from "./Badge";

const WinnerCard = ({ winner, className }) => {
  return (
    <div className={`flex flex-col  group ${className}`}>
      <div className="relative overflow-hidden rounded-[30px] w-full h-full  mb-4">
        <Badge rank={winner.rank} />
        <img
          src={winner.image}
          alt={winner.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
          {winner.title}
        </h3>
        <p className="text-muted-foreground text-sm font-medium">
          {winner.author}
        </p>
      </div>
    </div>
  );
};

const winners = [
  {
    id: 1,
    rank: 1,
    title: "Morning Mist",
    author: "Elena Fisher",
    image:
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    rank: 2,
    title: "Golden Hour",
    author: "Elena Fisher",
    image:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    rank: 3,
    title: "Urban Solitude",
    author: "Elena Fisher",
    image:
      "https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const LatestWinner = () => {
  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold font-inter mb-2">Latest Winners</h2>
          <p className="text-muted-foreground text-sm">
            Highlights from the Spring 2024 collection
          </p>
        </div>

        {/* Grid Layout */}
        <div className="flex gap-8  w-full">
          {/* Left Column - Rank 1 (Full Height) */}
          <div className=" flex-1 h-full">
            <WinnerCard winner={winners[0]} className="h-[820px]" />
          </div>

          {/* Right Column - Rank 2 & 3 (Stacked) */}
          <div className="flex-1">
            <div className="flex flex-col gap-8 h-full">
              <div className="flex-1">
                <WinnerCard winner={winners[1]} className="h-[400px]" />
              </div>
              <div className="flex-1">
                <WinnerCard winner={winners[2]} className="h-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWinner;
