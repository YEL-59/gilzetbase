import { useState, useEffect } from "react";

const Upcomingevent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a fixed future date for consistent display, or relative for demo
    // Let's set it to next Sunday roughly, or just 2 days ahead to match the "1d 18h" vibe
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); 
    targetDate.setHours(targetDate.getHours() + 18);
    targetDate.setMinutes(15);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <img
            src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Event Background"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider mb-2 uppercase drop-shadow-md">
              Art Vision Awards
            </h2>
            <p className="text-lg md:text-xl font-light text-white/90 mb-6 drop-shadow-sm">
              Sunday Morning
            </p>

            {/* Countdown Display */}
            <div className="text-4xl md:text-6xl font-medium mb-8 tabular-nums drop-shadow-lg font-serif">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </div>

            <button className="bg-[#C6A45C] hover:bg-[#b08d45] text-white font-medium px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto block">
              Submit a Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomingevent;