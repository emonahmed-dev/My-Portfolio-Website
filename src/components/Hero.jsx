import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase } from "react-icons/si";
import me from "../assets/Emon-Ahmed.webp";
import resume from "../assets/Emon_Ahmed_MERN_Stack_Web_Developer_Resume.pdf";

const techStack = [
  {
    name: "React",
    logo: <FaReact className="w-5 h-5" />,
    glowColor: "rgba(59, 130, 246, 0.35)"
  },
  {
    name: "Next.js",
    logo: <SiNextdotjs className="w-5 h-5" />,
    glowColor: "rgba(255, 255, 255, 0.28)"
  },
  {
    name: "TypeScript",
    logo: <SiTypescript className="w-5 h-5" />,
    glowColor: "rgba(37, 99, 235, 0.35)"
  },
  {
    name: "Tailwind CSS",
    logo: <SiTailwindcss className="w-5 h-5" />,
    glowColor: "rgba(34, 211, 238, 0.32)"
  },
  {
    name: "Firebase",
    logo: <SiFirebase className="w-5 h-5" />,
    glowColor: "rgba(249, 115, 22, 0.35)"
  }
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-10 sm:py-12">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 items-center lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.32em] text-cyan-300 shadow-sm shadow-cyan-500/10"
            >
              BUILDING MODERN WEB EXPERIENCES
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
                Frontend Developer Building Modern Web Experiences
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
                I build responsive web applications using React, Next.js, TypeScript, and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <motion.div
                whileHover={{ x: 4, y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex rounded-full"
              >
                <Link
                  to="projects"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="btn-action btn-action-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300"
                >
                  View Work
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 4, y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex rounded-full"
              >
                <Link
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="btn-action btn-action-secondary inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300"
                >
                  Let’s Talk
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 space-y-4"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${tech.glowColor}, transparent 70%)`,
                        zIndex: -1,
                      }}
                    />

                    <div className="relative flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/75 px-4 py-3 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:border-white/20">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/95 text-slate-100">
                        {tech.logo}
                      </div>
                      <span className="text-sm font-semibold text-slate-100">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-xl"
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-2xl shadow-black/40"
            >
              <img
                src={me}
                alt="Professional portrait of Emon Ahmed"
                className="h-full w-full min-h-[360px] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
