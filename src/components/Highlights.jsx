import { useState, useRef } from "react";
import HighlightCard from "./HighlightCard";
import { highlights } from "../data";

export default function Highlights() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const scrollRef = useRef(null);

  const handleMobileScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveMobileIdx(Math.min(highlights.length - 1, Math.max(0, index)));
  };

  return (
    <section className="w-full" id="highlights">
      <div className="mb-8">
        <h3 className="text-2xl font-heading underline decoration-accent underline-offset-4 mb-1">
          Highlights
        </h3>
      </div>

      {/* Desktop Responsive Bento Grid View */}
      <div className="hidden lg:grid grid-cols-12 gap-8 py-4 px-2">
        {highlights.map((item, index) => {
          // Map bento column spans for organic variety
          const colSpanClass =
            index === 0
              ? "col-span-7"
              : index === 1
              ? "col-span-5"
              : index === 2
              ? "col-span-5"
              : "col-span-7";

          return (
            <HighlightCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
              rotation={item.rotation}
              className={colSpanClass}
            />
          );
        })}
      </div>

      {/* Mobile Horizontal Swipe Gallery View */}
      <div className="lg:hidden flex flex-col gap-4">
        <div
          ref={scrollRef}
          onScroll={handleMobileScroll}
          className="w-full flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-4 custom-scrollbar -mx-4 px-4 pt-4"
        >
          {highlights.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[85vw] max-w-[320px]"
            >
              <HighlightCard
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.date}
                rotation={0}
              />
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-1">
          {highlights.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeMobileIdx
                  ? "w-5 bg-accent"
                  : "w-2 bg-text-secondary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
