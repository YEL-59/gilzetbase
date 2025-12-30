const Badge = ({ rank }) => {
  return (
    <div className="absolute top-6 left-6 z-10 drop-shadow-lg">
      <div className="relative flex items-center justify-center">
        {/* Ribbon/Medal SVG Shape */}
        <svg
          width="48"
          height="64"
          viewBox="0 0 48 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-16 md:w-16 md:h-20"
        >
          {/* Ribbon Tails */}
          <path d="M24 62L8 50V30H40V50L24 62Z" fill="#E62E5C" />
          <path
            d="M24 62L40 50V30H8V50L24 62Z"
            fill="#FF477E"
            fillOpacity="0.8"
          />

          {/* Main Circle - Sunburst effect */}
          <circle cx="24" cy="24" r="20" fill="#FFC83D" />
          <path
            d="M24 4L26.5 19H41.5L29.5 27.5L34 42L24 34L14 42L18.5 27.5L6.5 19H21.5L24 4Z"
            fill="#FFD700"
            opacity="0.5"
          />
          <circle
            cx="24"
            cy="24"
            r="16"
            fill="#FDB913"
            stroke="#FFF7CC"
            strokeWidth="2"
          />
        </svg>

        {/* Rank Number */}
        <span className="absolute top-4 md:top-5 text-white font-bold text-xl md:text-2xl font-serif">
          {rank}
        </span>
      </div>
    </div>
  );
};

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
