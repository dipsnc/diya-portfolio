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
} from "lucide-react";
import SkillCard from "../components/SkillCard";
import SkillPill from "../components/SkillPill";
import Stack from "../components/ProjectStack";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import EducationData from "../components/EducationData";
import { useRef, useState } from "react";
import { PaperTexture } from "@paper-design/shaders-react";
import { motion, useScroll } from "motion/react";
import { skills, projects, education, experience } from "../data";

export default function Home() {
  const scrollRef = useRef(null);
  const experienceRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start 80%", "end 100%"],
    container: scrollRef,
  });

  return (
    <main className="bg-background lg:h-screen flex flex-col px-4 py-4 lg:px-8 relative lg:overflow-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-50">
        <PaperTexture
          width={window.innerWidth}
          height={window.innerHeight}
          colorBack="#ffffff00"
          colorFront="#b1a581"
          contrast={0.3}
          roughness={0.4}
          fiber={0.3}
          fiberSize={0.2}
          crumples={0.3}
          crumpleSize={0.35}
          folds={0.65}
          foldCount={5}
          drops={0.2}
          fade={0}
          seed={5.8}
          scale={0.6}
          fit="cover"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto md:px-8 lg:px-0 flex-1 flex flex-col gap-4 lg:gap-6 relative z-10 lg:overflow-hidden">
        <nav className="flex-none flex flex-row justify-between items-center px-6 py-2 bg-white rounded-full h-16 shadow-sm border border-gray-200 relative">
          <h1 className="text-text-primary font-heading text-2xl lg:text-3xl">
            🌻 Portfolio
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex flex-row gap-2">
            {[
              "About",
              "Education",
              "Skills",
              "Projects",
              "Experience",
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
                "Education",
                "Skills",
                "Projects",
                "Experience",
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
            <div className="w-full lg:w-1/4 lg:min-w-[300px] h-auto lg:h-full lg:overflow-y-auto px-6 py-12 lg:py-6 flex flex-col items-center justify-center gap-4 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-100">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-surface rounded-full overflow-hidden shadow-inner">
                <img src={myImg} alt="Diya Mondal" className="h-full w-full" />
              </div>

              <div className="text-center">
                <span className="text-text-secondary text-sm uppercase tracking-wider">
                  Hi, I'm
                </span>
                <h2 className="text-text-primary font-heading text-3xl block">
                  Diya Mondal
                </h2>
                <p className="text-accent font-medium">Frontend Developer</p>
              </div>

              <div className="text-center px-2 text-text-secondary leading-relaxed text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  beatae dicta accusantium, at delectus omnis deserunt optio
                  ipsa quia maxime reprehenderit.
                </p>
              </div>

              <div className="w-full flex justify-center">
                <button className="px-8 py-3 bg-accent text-white hover:bg-accent-hover transition-colors rounded-full font-medium shadow-sm">
                  Download CV
                </button>
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
                    <p className="text-text-secondary leading-relaxed">
                      Your main content goes here. This area is scrollable while
                      your profile card on the left remains fixed in its column.
                      You can add your bio, experience, skills, and more. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mt-4 text-text-secondary leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
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

                  <div className="w-full" id="projects">
                    <h3 className="text-2xl font-heading underline decoration-accent underline-offset-4 mb-6">
                      Projects
                    </h3>
                    <div className="w-full h-auto lg:h-[600px]">
                      {/* Desktop Stack View */}
                      <div className="hidden lg:block h-full">
                        <Stack
                          randomRotation={false}
                          sensitivity={200}
                          sendToBackOnClick={true}
                          cards={projects.map((project) => (
                            <ProjectCard
                              key={project.id}
                              image={project.image}
                              text={project.title}
                              desc={project.description}
                            >
                              {project.stack.map((skill) => (
                                <SkillPill key={skill} text={skill} />
                              ))}
                            </ProjectCard>
                          ))}
                          autoplay={false}
                          autoplayDelay={3000}
                          pauseOnHover={false}
                        />
                      </div>

                      {/* Mobile Simple List View */}
                      <div className="flex flex-col gap-6 lg:hidden">
                        {projects.map((project) => (
                          <ProjectCard
                            key={project.id}
                            image={project.image}
                            text={project.title}
                            desc={project.description}
                          >
                            {project.stack.map((skill) => (
                              <SkillPill key={skill} text={skill} />
                            ))}
                          </ProjectCard>
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
                        className="hidden lg:block absolute left-[-2px] top-0 bottom-0 w-[2px] bg-accent origin-top"
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
                        <LinkedinIcon
                          className="hover:text-accent cursor-pointer transition-colors"
                          size={30}
                        />
                        <GithubIcon
                          className="hover:text-accent cursor-pointer transition-colors"
                          size={30}
                        />
                        <Mail
                          className="hover:text-accent cursor-pointer transition-colors"
                          size={30}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-8 border-t border-gray-200 pt-4">
                    <p className="text-text-secondary text-center">
                      Built with ❤️ and back pain by Diya Mondal
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
