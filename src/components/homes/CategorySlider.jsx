import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Models / Hair / Styling',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Fine Art & Conceptual',
    image: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Nature & Travel',
    image: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Architecture & Urban',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Food & Lifestyle',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Sports & Action',
    image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
  }, {
    id: 7,
    title: 'Models / Hair / Styling',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8,
    title: 'Fine Art & Conceptual',
    image: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 9,
    title: 'Nature & Travel',
    image: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 10,
    title: 'Architecture & Urban',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 11,
    title: 'Food & Lifestyle',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 12,
    title: 'Sports & Action',
    image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const CARD_WIDTH = 340;
const GAP = 24;

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const calculateVisibleCards = () => {
    // Determine how many cards fit in the viewport
    const count = Math.floor(window.innerWidth / (CARD_WIDTH + GAP));
    // Ensure at least 1 card is considered visible
    return Math.max(1, count);
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(calculateVisibleCards());
    };

    // Initial calculation
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, categories.length - visibleCards);

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex, isDragging]);

  /* ---------- UPDATE TRANSLATE ---------- */
  useEffect(() => {
    // If window resized and we are past new maxIndex, reset or clamp
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
    
    const newTranslate = -currentIndex * (CARD_WIDTH + GAP);
    setCurrentTranslate(newTranslate);
    setPrevTranslate(newTranslate);
  }, [currentIndex, maxIndex]);

  const getPositionX = (e) =>
    e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;

  const handleStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const diff = getPositionX(e) - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    const threshold = CARD_WIDTH / 4;

    if (movedBy < -threshold && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if (movedBy > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentTranslate(prevTranslate);
    }
  };

  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-3">Choose your Categories</h2>
          <p className="text-muted-foreground text-lg">Submit your best work</p>
        </div>
      </div>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing pl-4"
            style={{ 
              transform: `translateX(${currentTranslate}px)`, 
              gap: GAP 
            }}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={() => isDragging && handleEnd()}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ width: CARD_WIDTH, height: 360 }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl font-medium">
                      {category.title}
                    </h3>
                    <ArrowUpRight className="text-white w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="container mx-auto px-4">
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-foreground' : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CategorySlider;