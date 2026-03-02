import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetInstagramFeed } from "@/hooks/instagramFeed.hook";
import { Instagram, Loader2, Play } from "lucide-react";

const InstagramFeed = () => {
  const { data: instagramFeed, isLoading, isError } = useGetInstagramFeed();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-20 min-h-[400px]">
        <Loader2 className="h-10 w-10 animate-spin text-[#CAA844]" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center p-20 min-h-[400px] text-red-500">
        Error loading feed
      </div>
    );
  }

  const feedData = instagramFeed?.data?.[0];
  if (!feedData) return null;

  const profileImageUrl = feedData.profile;
  const postsCount = feedData.instagram_contents?.length || 0;
  const posts = [...(feedData.instagram_contents || [])].sort(
    (a, b) => a.order - b.order
  );

  return (
    <section className="w-full bg-[#F7F6F3] py-25 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border-2 border-none shadow-md">
              <AvatarImage src={profileImageUrl} alt={feedData.name || "Profile"} />
              <AvatarFallback>
                {feedData.name ? feedData.name.substring(0, 2).toUpperCase() : "IF"}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="font-[Inter] text-[32px] not-italic font-medium leading-[40px] text-[#0A0A0A]">
                Latest on Instagram
              </h2>
              <p className="text-sm text-gray-600 mt-0.5">{postsCount} posts</p>
            </div>
          </div>

          <Button
            asChild
            className="bg-[#CAA844] hover:bg-[#c69563] text-white font-medium px-6 py-2 h-auto shadow-sm transition-all duration-200 cursor-pointer"
          >
            <a
              href={feedData.url || "https://www.instagram.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us
            </a>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className=" p-0 group relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.play().catch(() => { });
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                {post.content_type === "video" ? (
                  <>
                    <video
                      src={post.video}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute top-4 right-4 z-10 p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-80 group-hover:opacity-0 transition-opacity duration-300">
                      <Play size={16} fill="currentColor" />
                    </div>
                  </>
                ) : (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-none shadow-md">
                      <AvatarImage src={profileImageUrl} alt="Profile" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>

                    <div className="overflow-hidden">
                      <p className="font-[Inter] text-[14px] not-italic font-medium leading-[18px] text-[#FEFEFE] truncate">
                        {post.title}
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        {new Date(post.created_at).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram className="h-6 w-6 text-white opacity-90" />
                  </a>
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
