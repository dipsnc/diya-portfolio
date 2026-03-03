import { motion } from "motion/react";

export default function ExperienceCard({
  title,
  description,
  img,
  duration,
  org,
}) {
  const fallbackImg =
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=300&auto=format&fit=crop";

  return (
    <div className="relative pl-0 lg:pl-1">
      {/* The Dot - Centered on the timeline line */}
      <div className="hidden lg:block absolute left-[-39px] top-3 w-3 h-3 rounded-full animate-pulse bg-accent shadow-sm z-10" />

      {/* The Content Card with entry animation */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <h4 className="font-heading text-xl text-text-primary">{title}</h4>
            <p className="text-accent hover:text-accent-hover font-medium uppercase">
              {org}
            </p>
            <p className="text-accent-secondary font-medium">{duration}</p>
            <p className="text-text-secondary mt-2 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="hidden lg:block bg-surface h-16 w-16 rounded-2xl flex-shrink-0 overflow-hidden border border-stone-100 shadow-inner">
            <img
              src={img || fallbackImg}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
