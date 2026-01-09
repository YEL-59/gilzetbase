import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  const posts = [
    {
      id: "1",
      imageUrl:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "ART VISION AWARDS",
      timestamp: "a month ago",
      profileImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      id: "2",
      imageUrl:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "ART VISION AWARDS",
      timestamp: "a month ago",
      profileImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      id: "3",
      imageUrl:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "ART VISION AWARDS",
      timestamp: "a month ago",
      profileImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      id: "4",
      imageUrl:
        "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "ART VISION AWARDS",
      timestamp: "a month ago",
      profileImage:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  return (
    <section className="w-full bg-[#F7F6F3] py-25 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border-2 border-none shadow-md">
              <AvatarImage
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Profile"
              />
              <AvatarFallback>LI</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="font-[Inter] text-[32px] not-italic font-medium leading-[40px] text-[#0A0A0A]">
                Latest on Instagram
              </h2>
              <p className="text-sm text-gray-600 mt-0.5">61 posts</p>
            </div>
          </div>

          <Button className="bg-[#CAA844] hover:bg-[#c69563] text-white font-medium px-6 py-2 h-auto shadow-sm transition-all duration-200">
            Follow us
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className=" p-0 roup relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-none shadow-md">
                      <AvatarImage src={post.profileImage} alt="Profile" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-[Inter] text-[14px] not-italic font-medium leading-[18px] text-[#FEFEFE]">
                        {post.caption}
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        {post.timestamp}
                      </p>
                    </div>
                  </div>

                  <Instagram className="h-6 w-6 text-white opacity-90" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
