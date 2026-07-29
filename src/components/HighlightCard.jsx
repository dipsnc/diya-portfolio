import { motion } from "motion/react";

export default function HighlightCard({
  image,
  title,
  subtitle,
  description,
  date,
  year,
  tag,
  rotation = 0,
  className = "",
}) {
  const initialRotation = rotation + 2;
  const displayYear = year || date;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: initialRotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -8, rotate: 0 }}
      className={`relative bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${className}`}
    >
      {/* Sunflower Push Pin */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 text-2xl select-none filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
        🌻
      </div>

      {/* Photo Frame Container */}
      <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-surface border border-stone-100 shrink-0">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
            {tag}
          </span>
        )}
        {displayYear && (
          <span className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs text-text-secondary text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-stone-200/60 shadow-2xs">
            {displayYear}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="mt-3 flex flex-col gap-1 flex-1 justify-between">
        <div>
          <h4 className="font-heading text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
            {title}
          </h4>
          {subtitle && (
            <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-0.5">
              {subtitle}
            </p>
          )}
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mt-1 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
