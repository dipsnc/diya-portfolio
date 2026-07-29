import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Video, ChevronLeft, ChevronRight, Globe } from "lucide-react";

export default function ProjectCard({
  images,
  image,
  children,
  text,
  title,
  desc,
  description,
  points,
  role,
  links,
  status,
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Normalize image list
  const imgList = images && images.length > 0 ? images : image ? [image] : [];
  const projectTitle = title || text;
  const projectDesc = description || desc;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % imgList.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + imgList.length) % imgList.length);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-md border border-text-primary/20 overflow-hidden flex flex-col group">
      <div className="p-4  flex flex-col gap-2.5">
        {/* Multi-Screenshot Image Carousel */}
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-stone-200 relative bg-surface shrink-0 group/carousel select-none">
          {imgList.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIdx}
                src={imgList[currentIdx]}
                alt={`${projectTitle} screenshot ${currentIdx + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </AnimatePresence>
          )}

          {/* Carousel Arrows */}
          {imgList.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface/90 hover:bg-white text-text-primary p-1.5 rounded-full shadow-md backdrop-blur-xs transition-all opacity-80 hover:opacity-100 z-10"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface/90 hover:bg-white text-text-primary p-1.5 rounded-full shadow-md backdrop-blur-xs transition-all opacity-80 hover:opacity-100 z-10"
                aria-label="Next screenshot"
              >
                <ChevronRight size={18} />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xs z-10">
                {imgList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIdx(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIdx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {status && (
            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-10">
              {status}
            </div>
          )}
        </div>

        {/* Project Meta Details */}
        <div className="flex flex-col gap-1.5 mt-1">
          <h3 className="text-xl lg:text-2xl font-heading text-text-primary line-clamp-1">
            {projectTitle}
          </h3>
          {role && (
            <p className="text-accent text-xs lg:text-sm font-medium">
              Role: {role}
            </p>
          )}

          {points && points.length > 0 ? (
            <ul className="space-y-1 my-1 text-xs text-text-secondary">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-accent text-[10px] mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-text-secondary text-xs lg:text-sm leading-relaxed line-clamp-3">
              {projectDesc}
            </p>
          )}

          <div className="flex flex-row gap-1.5 flex-wrap mt-1">{children}</div>
        </div>

        {/* Action Buttons: 🌐 Live Demo -> 🎥 Demo Video -> 💻 Source Code */}
        <div className="flex flex-row gap-2.5 items-center justify-end w-full pt-2 border-t border-stone-100 mt-1 flex-nowrap whitespace-nowrap overflow-x-auto custom-scrollbar">
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-primary hover:text-accent hover:decoration-accent underline underline-offset-2 font-medium text-xs lg:text-sm flex flex-row gap-1.5 items-center transition-colors shrink-0"
            >
              <Globe size={15} /> Live Demo
            </a>
          )}

          {links?.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-primary hover:text-accent hover:decoration-accent underline underline-offset-2 font-medium text-xs lg:text-sm flex flex-row gap-1.5 items-center transition-colors shrink-0"
            >
              <Github size={15} /> Source Code
            </a>
          )}
          {links?.video && (
            <a
              href={links.video}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-primary hover:text-accent hover:decoration-accent underline underline-offset-2 font-medium text-xs lg:text-sm flex flex-row gap-1.5 items-center transition-colors shrink-0"
            >
              <Video size={15} /> Demo Video
            </a>
          )}
          {(!links || (!links.live && !links.code && !links.video)) &&
            status === "In Progress" && (
              <span className="text-text-secondary text-xs italic shrink-0">
                Under Development
              </span>
            )}
        </div>
      </div>
    </div>
  );
}
