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
    <div className="w-full h-full bg-white rounded-2xl shadow-md border border-text-primary/30 overflow-hidden flex flex-col group">
      <div className="flex-1 p-4 lg:p-6 flex flex-col gap-3 overflow-hidden">
        <div className="w-full h-[180px] lg:h-[300px] border-b border-text-primary/30 rounded-2xl overflow-hidden flex-shrink-0 relative">
          <img
            src={image}
            alt={text}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {status && (
            <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              {status}
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col min-h-0 gap-2">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl lg:text-2xl font-heading line-clamp-1">
              {text}
            </h3>
          </div>
          {role && (
            <p className="text-accent text-xs lg:text-sm font-medium mb-1">
              {role}
            </p>
          )}
          <p className="text-text-secondary text-xs lg:text-sm line-clamp-3 lg:line-clamp-4">
            {desc}
          </p>
          <div className="flex flex-row gap-1.5 flex-wrap mt-1">{children}</div>
        </div>
        <div className="flex flex-col justify-between items-start mt-auto pt-2">
          <div className="flex flex-row gap-2 items-center sm:justify-end justify-between w-full">
            {links?.code && (
              <a
                href={links.code}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 text-text-primary hover:text-accent hover:decoration-accent underline underline-offset-2 font-medium text-sm lg:text-base whitespace-nowrap flex flex-row gap-2 items-center transition-colors"
              >
                Code <Github size={18} />
              </a>
            )}
            {links?.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 text-text-primary hover:text-accent hover:decoration-accent underline underline-offset-2 font-medium text-sm lg:text-base whitespace-nowrap flex flex-row gap-2 items-center transition-colors"
              >
                Live <MoveUpRight size={18} />
              </a>
            )}
            {!links && status === "In Progress" && (
              <span className="text-text-secondary text-xs italic px-4 py-1">
                Under Development
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
