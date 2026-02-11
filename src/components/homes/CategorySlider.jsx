import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useGetCategories } from '../../hooks/home.hook';

const CARD_WIDTH = 340;
const GAP = 24;

const CategorySlider = () => {
  const { data: categoriesData, isLoading, isError } = useGetCategories();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const categories = categoriesData?.data?.data || [];

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
    if (isDragging || categories.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex, isDragging, categories.length]);

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
    if (categories.length === 0) return;
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

  if (isLoading) {
    return (
      <div className="w-full py-20 bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || categories.length === 0) {
    return null;
  }

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
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-xl font-medium">
                    {category.name}
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
              className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-foreground' : 'w-2 bg-muted'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySlider;