import { Github, MoveUpRight } from "lucide-react";

export default function ProjectCard({
  image,
  children,
  text,
  desc,
  role,
  links,
  status,
}) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md border border-text-primary/20 overflow-hidden flex flex-col group">
      <div className="p-4 lg:p-5 flex flex-col gap-2.5">
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-stone-200 relative bg-surface shrink-0">
          <img
            src={image}
            alt={text}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {status && (
            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-10">
              {status}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5 mt-1">
          <h3 className="text-xl lg:text-2xl font-heading text-text-primary line-clamp-1">
            {text}
          </h3>
          {role && (
            <p className="text-accent text-xs lg:text-sm font-medium">
              Role: {role}
            </p>
          )}
          <p className="text-text-secondary text-xs lg:text-sm leading-relaxed line-clamp-3">
            {desc}
          </p>
          <div className="flex flex-row gap-1.5 flex-wrap mt-1">{children}</div>
        </div>

        <div className="flex flex-row gap-3 items-center justify-end w-full pt-2 border-t border-stone-100 mt-1">
          {links?.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-primary hover:text-accent hover:decoration-accent underline underline-offset-2 font-medium text-xs lg:text-sm flex flex-row gap-1.5 items-center transition-colors"
            >
              Code <Github size={16} />
            </a>
          )}
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-primary hover:text-accent hover:decoration-accent underline underline-offset-2 font-medium text-xs lg:text-sm flex flex-row gap-1.5 items-center transition-colors"
            >
              Live <MoveUpRight size={16} />
            </a>
          )}
          {!links && status === "In Progress" && (
            <span className="text-text-secondary text-xs italic">
              Under Development
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
