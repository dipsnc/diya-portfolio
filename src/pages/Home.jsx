import NavButton from "../components/NavButton";
import myImg from "../assets/diya.jpg";
import {
  Instagram,
  Linkedin,
  Github,
  Twitter,
  LinkedinIcon,
  GithubIcon,
  Mail,
  Menu,
  X,
  MoveUpRight,
} from "lucide-react";
import SkillCard from "../components/SkillCard";
import SkillPill from "../components/SkillPill";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import EducationData from "../components/EducationData";
import Highlights from "../components/Highlights";
import { useRef, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { skills, projects, education, experience } from "../data";

export default function Home() {
  const scrollRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projectCards = useMemo(
    () =>
      projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          text={project.title}
          desc={project.description}
          role={project.role}
          links={project.links}
          status={project.status}
        >
          {project.stack.map((skill) => (
            <SkillPill key={skill} text={skill} />
          ))}
        </ProjectCard>
      )),
    [],
  );

  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start 80%", "end 100%"],
    container: scrollRef,
  });

  return (
    <main className="bg-background lg:h-screen flex flex-col px-4 py-4 lg:px-8 relative lg:overflow-hidden bg-radial from-accent/40 to-background">
      <div className="max-w-7xl w-full mx-auto md:px-8 lg:px-0 flex-1 flex flex-col gap-4 lg:gap-6 relative z-10 lg:overflow-hidden">
        <nav className="flex-none flex flex-row justify-between items-center px-6 py-2 bg-white rounded-full h-16 shadow-sm border border-gray-200 relative">
          <h1 className="text-text-primary font-heading text-2xl lg:text-3xl">
            <motion.span
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              🌻
            </motion.span>{" "}
            Portfolio
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex flex-row gap-2">
            {[
              "About",
              "Education",
              "Skills",
              "Projects",
              "Experience",
              "Highlights",
              "Contact",
            ].map((item) => (
              <NavButton
                key={item}
                text={item}
                onClick={() => {
                  document
                    .getElementById(item.toLowerCase())
                    .scrollIntoView({ behavior: "smooth" });
                }}
              />
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-text-primary hover:bg-surface rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-white border border-gray-200 rounded-3xl shadow-xl p-6 z-50 lg:hidden flex flex-col gap-2">
              {[
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Highlights",
                "Contact",
              ].map((item) => (
                <NavButton
                  key={item}
                  text={item}
                  onClick={() => {
                    document
                      .getElementById(item.toLowerCase())
                      .scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </nav>

        <section className="flex-1 bg-white rounded-4xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="h-full flex flex-col lg:flex-row">
            {/* Left Sidebar - Profile Card (Fixed/Hero) */}
            <div className="w-full lg:w-1/4 lg:min-w-75 h-auto lg:h-full lg:overflow-y-auto px-6 py-12 lg:py-6 flex flex-col items-center justify-center gap-4 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-100">
              <div className="w-48 h-48 md:max-w-64 md:h-auto aspect-square bg-surface rounded-full overflow-hidden shadow-inner outline-accent outline-offset-4 outline-2">
                <img
                  src={myImg}
                  alt="Diya Mondal"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-center">
                <span className="text-text-secondary text-sm uppercase tracking-wider">
                  Hi, I'm
                </span>
                <h2 className="text-text-primary font-heading text-3xl block">
                  Diya Mondal
                </h2>
                <p className="text-accent font-medium">
                  Full Stack MERN Developer
                </p>
              </div>

              <div className="text-center px-2 text-text-secondary leading-relaxed text-sm">
                <p>
                  Building user-first web experiences with precision, curiosity,
                  and intent, shaped by a sharp eye for detail.
                </p>
              </div>

              <div className="w-full flex justify-center">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-accent text-white hover:bg-accent-hover transition-colors rounded-full font-medium shadow-sm inline-block"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Main Scrollable Content */}
            <div
              ref={scrollRef}
              className="flex-1 h-auto lg:h-full lg:overflow-y-auto px-6 lg:px-12 py-10 custom-scrollbar"
            >
              <div className="max-w-3xl mx-auto space-y-12">
                <section className="space-y-15">
                  <div id="about">
                    <h3 className="text-2xl font-heading mb-4 underline decoration-accent underline-offset-4">
                      About Me
                    </h3>
                    <div className="text-text-primary leading relaxed space-y-4">
                      <p>
                        I'm a MERN stack developer who enjoys building{" "}
                        <span className="bg-accent/30 px-1">
                          user-first applications
                        </span>{" "}
                        that solve real problems, often problems I've
                        experienced myself. I care as much about how a product
                        feels to use as how it's built, paying close attention
                        to user flow, interaction, and the small details that
                        make software intuitive.
                      </p>
                      <p>
                        I enjoy turning ideas into polished products and care
                        about{" "}
                        <span className="bg-accent/30 px-1">
                          understanding the technologies
                        </span>{" "}
                        I use, not just making them work. This curiosity led me
                        to build projects like MeowPad, which helps developers
                        understand{" "}
                        <span className="bg-accent/30 px-1">
                          AI-generated code
                        </span>{" "}
                        instead of simply accepting it.
                      </p>
                      <p>
                        Outside of web development, I explore game development
                        as a{" "}
                        <span className="bg-accent/30 px-1">
                          creative outlet
                        </span>
                        . When I'm away from my keyboard, you'll probably find
                        me playing games, watching anime, or dancing on stage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full" id="education">
                    <h3 className="text-2xl font-heading mb-6 underline decoration-accent underline-offset-4">
                      Education
                    </h3>
                    <div className="hidden lg:block overflow-x-auto rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
                      <table className="w-full text-left font-body">
                        <thead className="uppercase text-xs tracking-widest text-stone-500 border-b border-stone-300">
                          <tr>
                            <th className="px-4 py-3 font-medium">Degree</th>
                            <th className="px-4 py-3 font-medium">Institute</th>
                            <th className="px-4 py-3 font-medium text-right">
                              Marks
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 text-stone-700">
                          {education.map((edu, index) => (
                            <EducationData
                              key={index}
                              degree={edu.degree}
                              university={edu.university}
                              marks={edu.marks}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Education Cards */}
                    <div className="grid grid-cols-1 gap-4 lg:hidden">
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className="p-5 bg-white rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-1"
                        >
                          <h4 className="font-heading text-lg text-text-primary">
                            {edu.degree}
                          </h4>
                          <p className="text-stone-500 text-sm">
                            {edu.university}
                          </p>
                          <p className="text-accent font-medium text-sm mt-1">
                            {edu.marks}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full" id="skills">
                    <h3 className="text-2xl font-heading mb-6 underline decoration-accent underline-offset-4">
                      Skills
                    </h3>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {Object.entries(skills).map(([category, skillList]) => (
                        <SkillCard key={category} text={category}>
                          {skillList.map((skill) => (
                            <SkillPill key={skill} text={skill} />
                          ))}
                        </SkillCard>
                      ))}
                    </div>
                  </div>

                  <div
                    className="w-full relative"
                    id="projects"
                    ref={projectsRef}
                  >
                    {/* Desktop Apple/Linear Alternating Showcase View */}
                    <div className="hidden lg:flex flex-col gap-2 w-full max-w-6xl mx-auto">
                      <h3 className="text-2xl font-heading underline decoration-accent underline-offset-4 mb-4">
                        Projects
                      </h3>

                      {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                          <div
                            key={project.id}
                            className="grid grid-cols-12 gap-8 lg:gap-14 items-center min-h-[75vh]"
                          >
                            {/* Image Showcase */}
                            <div
                              className={`col-span-7 relative ${
                                isEven ? "order-2" : "order-1"
                              }`}
                            >
                              {/* Accent Radial Glow */}
                              <div
                                className={`absolute -inset-4 bg-accent/5 blur-2xl rounded-2xl transition-opacity duration-500 opacity-90 ${
                                  isEven ? "right-0" : "left-0"
                                }`}
                              />

                              <motion.div
                                initial={{ x: isEven ? 80 : -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                whileHover={{
                                  scale: 1.02,
                                  rotate: isEven ? 1 : -1,
                                }}
                                className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-surface flex items-center justify-center group"
                              >
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {project.status && (
                                  <div className="absolute top-4 right-4 bg-accent text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-md z-20">
                                    {project.status}
                                  </div>
                                )}
                              </motion.div>
                            </div>

                            {/* Text Content */}
                            <motion.div
                              initial={{ x: isEven ? -40 : 40, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true, amount: 0.35 }}
                              transition={{
                                duration: 0.8,
                                delay: 0.15,
                                ease: "easeOut",
                              }}
                              className={`col-span-5 flex flex-col gap-4 ${
                                isEven ? "order-1" : "order-2"
                              }`}
                            >
                              <span className="text-sm font-bold text-accent tracking-widest uppercase font-body">
                                0{idx + 1}
                              </span>

                              <h4 className="text-3xl lg:text-4xl font-heading text-text-primary font-bold">
                                {project.title}
                              </h4>

                              {project.role && (
                                <p className="text-accent text-sm font-medium">
                                  Role: {project.role}
                                </p>
                              )}

                              <p className="text-text-secondary text-base leading-relaxed">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap gap-2 pt-1">
                                {project.stack.map((skill) => (
                                  <SkillPill key={skill} text={skill} />
                                ))}
                              </div>

                              <div className="flex flex-row gap-4 items-center pt-3">
                                {project.links?.code && (
                                  <a
                                    href={project.links.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-white border border-stone-200 text-text-primary hover:text-accent hover:border-accent font-medium text-sm rounded-full flex flex-row gap-2 items-center shadow-xs transition-all"
                                  >
                                    Code <Github size={16} />
                                  </a>
                                )}
                                {project.links?.live && (
                                  <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-accent text-white hover:bg-accent-hover font-medium text-sm rounded-full flex flex-row gap-2 items-center shadow-sm transition-all"
                                  >
                                    Live <MoveUpRight size={16} />
                                  </a>
                                )}
                                {!project.links &&
                                  project.status === "In Progress" && (
                                    <span className="text-text-secondary text-xs italic">
                                      Under Development
                                    </span>
                                  )}
                              </div>
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Mobile Side-Swiping Carousel View */}
                    <div className="lg:hidden flex flex-col gap-4 w-full overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-2xl font-heading underline decoration-accent underline-offset-4">
                          Projects
                        </h3>
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">
                          Swipe &rarr;
                        </span>
                      </div>

                      <div className="w-full flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-4 custom-scrollbar">
                        {projects.map((project) => (
                          <div
                            key={project.id}
                            className="snap-center shrink-0 w-full"
                          >
                            <ProjectCard
                              image={project.image}
                              text={project.title}
                              desc={project.description}
                              role={project.role}
                              links={project.links}
                              status={project.status}
                            >
                              {project.stack.map((skill) => (
                                <SkillPill key={skill} text={skill} />
                              ))}
                            </ProjectCard>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-full" id="experience">
                    <h3 className="text-2xl font-heading underline decoration-accent underline-offset-4">
                      Experience
                    </h3>
                    <div
                      ref={experienceRef}
                      className="relative border-l-0 lg:border-l-2 border-stone-200 ml-0 pl-0 lg:ml-4 lg:pl-8 space-y-12 mt-8"
                    >
                      {/* The Animated Line (using Framer Motion) */}
                      <motion.div
                        className="hidden lg:block absolute -left-0.5 top-0 bottom-0 w-0.5 bg-accent origin-top"
                        style={{ scaleY: experienceProgress }}
                      />

                      {/* Timeline Item */}
                      <div className="relative space-y-8">
                        {experience.map((exp, index) => (
                          <ExperienceCard
                            key={index}
                            title={exp.title}
                            description={exp.description}
                            img={exp.image || myImg}
                            duration={exp.duration}
                            org={exp.org}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Highlights />

                  <div className="w-full" id="contact">
                    <h3 className="text-2xl font-heading mb-6 underline decoration-accent underline-offset-4">
                      Contact
                    </h3>
                    <div className="w-full h-auto flex flex-col justify-start items-start">
                      <p className="text-text-primary leading-relaxed text-lg mb-4">
                        Open to opportunities, collaborations and everything in
                        between!
                      </p>
                      <div className="w-full h-auto flex flex-row justify-start items-start gap-8 text-accent">
                        <a href="https://www.linkedin.com/in/diya-mondal1634/">
                          <LinkedinIcon
                            className="hover:text-accent-hover transition-colors"
                            size={30}
                          />
                        </a>
                        <a href="https://github.com/dipsnc">
                          <GithubIcon
                            className="hover:text-accent-hover transition-colors"
                            size={30}
                          />
                        </a>
                        <a href="mailto:diyam161819@gmail.com">
                          <Mail
                            className="hover:text-accent-hover transition-colors"
                            size={30}
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-4 border-t border-gray-200 pt-4">
                    <p className="text-text-secondary text-center">
                      Built with ❤️ by Diya Mondal
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
