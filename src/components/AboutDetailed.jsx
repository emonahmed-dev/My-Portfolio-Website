import { motion } from "framer-motion";

function AboutDetailed() {
  const stats = [
    {
      title: "Frontend Development",
      description: "Building responsive interfaces with React, Next.js, and modern web technologies",
      icon: "🎨",
    },
    {
      title: "React & Next.js",
      description: "Specializing in component architecture, state management, and SSR applications",
      icon: "⚛️",
    },
    {
      title: "Responsive Design",
      description: "Mobile-first approach using Tailwind CSS and modern CSS techniques",
      icon: "📱",
    },
    {
      title: "Full Stack Journey",
      description: "Expanding backend expertise with Node.js, Express.js, MongoDB, and Firebase",
      icon: "🚀",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    initial: { y: 0 },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative bg-background-light dark:bg-background-dark font-sans text-slate-700 dark:text-slate-300 antialiased overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10 dark:from-cyan-400/5 dark:to-blue-400/5"></div>

      <div className="relative min-h-screen">
        <main className="relative px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
                About Me
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column - About Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-display">
                      I'm <strong className="text-slate-900 dark:text-white font-semibold">Emon Ahmed</strong>, a Frontend Developer from Bangladesh passionate about building modern, responsive, and user-friendly web applications.
                    </p>

                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-display">
                      My primary focus is <strong className="text-slate-900 dark:text-white font-semibold">React, Next.js, TypeScript, and Tailwind CSS</strong>. I enjoy transforming UI designs into clean, maintainable, and high-performance web experiences that work seamlessly across all devices.
                    </p>

                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-display">
                      Beyond frontend development, I am actively expanding my backend knowledge with <strong className="text-slate-900 dark:text-white font-semibold">Node.js, Express.js, MongoDB, and Firebase</strong> as I continue my journey toward becoming a Full Stack Developer.
                    </p>
                  </div>

                  {/* Tech Stack Highlights */}
                  <div className="pt-6">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "Firebase",
                      ].map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="px-3 py-1.5 rounded-full text-sm font-medium text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={containerVariants}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      initial="initial"
                      className="group"
                    >
                      <motion.div variants={cardHoverVariants} className="h-full">
                        {/* Card with Glassmorphism Effect */}
                        <div className="relative h-full p-6 rounded-2xl border border-white/10 dark:border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-slate-800/30 dark:to-slate-700/10 backdrop-blur-md overflow-hidden">
                          {/* Gradient Border Effect */}
                          <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-blue-500/30 to-purple-500/30 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {/* Animated Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {/* Icon */}
                          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2">
                              {stat.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                              {stat.description}
                            </p>
                          </div>

                          {/* Shine Effect on Hover */}
                          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default AboutDetailed;
