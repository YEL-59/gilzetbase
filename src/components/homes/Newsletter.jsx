import { Instagram, Music, MessageCircle } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="w-full">
      {/* Top Banner / CTA */}
      <div className="relative py-32 bg-background flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background - using a dark blurred image for the bokeh effect */}
        <div className="absolute inset-0 z-0">
            <img 
               src="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1600" 
               alt="Background" 
               className="w-full h-full object-cover brightness-[0.4] blur-sm scale-110"
            />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-wide leading-tight">
            Share your vision with the world.
          </h2>
          <button className="bg-[#C6A45C] hover:bg-[#b08d45] text-white font-medium px-8 py-3 rounded-md transition-all duration-300 uppercase tracking-widest text-sm shadow-xl">
            Submit a Photo
          </button>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-background py-16 border-t border-border/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold uppercase tracking-widest mb-8">
            Newsletter
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-0 max-w-lg mx-auto mb-10">
            <input
              type="email"
              placeholder="Enter your mail"
              className="w-full sm:w-auto flex-1 px-4 py-3 border border-[#C6A45C]/40 outline-none focus:border-[#C6A45C] text-sm h-12 rounded-t-md sm:rounded-l-md sm:rounded-tr-none bg-background text-foreground"
            />
            <button className="w-full sm:w-auto bg-[#C6A45C] hover:bg-[#b08d45] text-white font-medium px-8 h-12 text-sm uppercase tracking-wide transition-colors rounded-b-md sm:rounded-r-md sm:rounded-bl-none">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 items-center mb-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground font-medium">
            @ArtVisionAwards
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;