import { Github, MoveUpRight, Underline } from "lucide-react";

export default function ProjectCard({ image, children, text, desc }) {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-md border border-text-primary/30 overflow-hidden flex flex-col">
      <div className="flex-1 p-4 lg:p-6 flex flex-col gap-4 overflow-hidden">
        <div className="w-full h-[200px] lg:h-[350px] border-b border-text-primary/30 rounded-2xl overflow-hidden flex-shrink-0">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          <h3 className="text-xl lg:text-2xl font-heading mb-2 line-clamp-1">
            {text}
          </h3>
          <p className="text-text-secondary text-sm lg:text-base">{desc}</p>
        </div>
        <div className="flex flex-col justify-between items-start gap-4 mt-auto">
          <div className="flex flex-row gap-2 flex-wrap">{children}</div>
          <div className="flex flex-row gap-2 items-center sm:justify-end justify-between w-full underline underline-offset-2">
            <button className="px-4 text-text-primary hover:text-accent hover:cursor-pointer font-medium text-sm lg:text-base whitespace-nowrap flex flex-row gap-2 items-center">
              Code <Github size={18} />
            </button>
            <button className="px-4 text-text-primary hover:text-accent hover:cursor-pointer font-medium text-sm lg:text-base whitespace-nowrap flex flex-row gap-2 items-center">
              Live <MoveUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
