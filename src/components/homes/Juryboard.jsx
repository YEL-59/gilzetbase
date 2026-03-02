import { User } from "lucide-react";
import { useGetJuries } from "../../hooks/home.hook";

const Juryboard = () => {
  const { data: juriesData, isLoading, isError } = useGetJuries();

  if (isLoading) {
    return (
      <div className="w-full py-20 bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !juriesData?.status) {
    return null;
  }

  const juryMembers = juriesData?.data?.data || [];

  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wide">
            Jury
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Meet The Experts Selecting This Year's Finalists.
          </p>
        </div>

        {/* Jury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16 container mx-auto">
          {juryMembers.map((member) => (
            <div key={member.id} className="flex flex-col group">
              {/* Image Container */}
              <div className="aspect-square w-full rounded-[30px] overflow-hidden mb-6 bg-muted/30">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-400">
                    <User className="w-24 h-24 text-gray-500 opacity-50" />
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground text-[12px]">
                {member.designation}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mb-24">
          <button className="bg-[#C6A45C] hover:bg-[#b08d45] text-white text-xs font-semibold px-8 py-3 rounded-md transition-all duration-300 uppercase tracking-widest shadow-md">
            View all
          </button>
        </div>

        {/* Jury Message */}
        {juryMembers.length > 0 && (
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Image */}
            <div className="w-full md:w-1/3">
              <div className=" rounded-[30px] overflow-hidden shadow-xl">
                <img
                  src={juryMembers[0].image || "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"}
                  alt={juryMembers[0].name}
                  className="w-full h-[400px] object-cover "
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="w-full md:w-2/3 pl-0 md:pl-8 py-4">
              <div className="pl-6">
                <h3 className="text-4xl font-serif mb-6 text-foreground">
                  Jury Message
                </h3>
                <p className="text-muted-foreground leading-relaxed italic mb-6 border-l-2 border-[#C6A45C]/50 px-2 py-2">
                  "Your vision is our inspiration. Each submission tells a unique story, and we are honored to be part of your journey. Keep pushing boundaries and showcasing your artistic voice to the world."
                </p>
                <p className="text-[#C6A45C] font-medium text-right">— {juryMembers[0].name}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Juryboard;
