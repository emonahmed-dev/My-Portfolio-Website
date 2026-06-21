import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaReact, FaDownload } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase } from "react-icons/si";
import me from "../assets/Emon-Ahmed.webp";
import resume from "../assets/Emon_Ahmed_MERN_Stack_Web_Developer_Resume.pdf";

const techStack = [
  {
    name: "React",
    logo: <FaReact />,
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.5)",
    bgColor: "rgba(97, 218, 251, 0.10)",
  },
  {
    name: "Next.js",
    logo: <SiNextdotjs />,
    color: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.32)",
    bgColor: "rgba(255, 255, 255, 0.07)",
  },
  {
    name: "TypeScript",
    logo: <SiTypescript />,
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.55)",
    bgColor: "rgba(49, 120, 198, 0.12)",
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss />,
    color: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.50)",
    bgColor: "rgba(56, 189, 248, 0.10)",
  },
  {
    name: "Firebase",
    logo: <SiFirebase />,
    color: "#FFCA28",
    glowColor: "rgba(255, 202, 40, 0.45)",
    bgColor: "rgba(255, 202, 40, 0.09)",
  },
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">

      {/* ── Background ambient blobs ── */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-blue-700/14 via-cyan-600/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/12 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-[55%] rounded-full bg-indigo-600/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:gap-20 lg:grid-cols-[1fr_auto]">

          {/* ── LEFT: Content ── */}
          <div className="space-y-8 text-left lg:max-w-2xl">

            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-300/90">
                Frontend Developer&nbsp; • &nbsp;Open to Internship
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-[3.6rem] lg:text-[4rem] xl:text-[4.4rem] font-bold text-white leading-[1.1] tracking-tight">
                Frontend Developer
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent leading-[1.2] inline-block">
                  Building Fast &amp;
                </span>
                <br />
                Modern Web Applications
              </h1>

              <p className="mt-6 text-[1.05rem] text-slate-400 max-w-lg leading-[1.78]">
                I build responsive, accessible and high-performance web
                applications using React, Next.js and TypeScript. Passionate
                about creating clean user experiences and continuously learning
                modern web technologies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              {/* Primary – View Projects */}
              <motion.div
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="inline-flex rounded-full"
              >
                <Link
                  to="projects"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all duration-300 cursor-pointer hero-btn-primary"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Projects
                </Link>
              </motion.div>

              {/* Secondary – Download Resume */}
              <motion.div
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="inline-flex rounded-full"
              >
                <a
                  href={resume}
                  download="Emon_Ahmed_MERN_Stack_Web_Developer_Resume.pdf"
                  className="hero-resume-btn inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 cursor-pointer"
                >
                  <FaDownload className="w-3.5 h-3.5" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="pt-2 space-y-4"
            >
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.72, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.52 + index * 0.09 }}
                    whileHover={{ scale: 1.12, y: -6, rotate: -3 }}
                    className="tech-logo-card group relative"
                    style={{ "--glow": tech.glowColor, "--bg": tech.bgColor, "--clr": tech.color }}
                  >
                    {/* Glow layer */}
                    <span
                      className="tech-card-glow"
                      style={{ background: `radial-gradient(circle at 50% 60%, ${tech.glowColor}, transparent 70%)` }}
                    />
                    {/* Card body */}
                    <span className="tech-card-body">
                      <span
                        className="tech-card-icon-wrap"
                        style={{ color: tech.color, background: tech.bgColor }}
                      >
                        {tech.logo}
                      </span>
                      <span className="tech-card-label">{tech.name}</span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="hero-image-scene">
              {/* Outer soft blue glow ring */}
              <div className="hero-glow-ring" />
              {/* Animated blob bg */}
              <div className="hero-blob-bg" />

              {/* Floating wrapper */}
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                className="hero-img-float"
              >
                {/* Blue halo behind image */}
                <div className="hero-halo" />

                {/* Profile image frame */}
                <div className="hero-img-frame">
                  <img
                    src={me}
                    alt="Professional portrait of Emon Ahmed"
                    className="hero-photo"
                  />
                  {/* Bottom fade overlay – subtle only */}
                  <div className="hero-img-overlay" />
                </div>

                {/* Single badge – Open to Opportunities */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 2.5, 0] }}
                  transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                  className="hero-badge hero-badge-tr"
                >
                  <span className="hero-badge-dot bg-emerald-400" />
                  <span>Open to Opportunities</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
