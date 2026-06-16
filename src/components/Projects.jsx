import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "BookCourier",
      description: "A library delivery management system for book requests",
      fullDescription:
        "BookCourier is a library delivery management system where users can request book pickup or delivery from their nearby libraries. The system helps students, researchers, and readers borrow and return books without physically visiting the library.",
      image: "https://i.ibb.co.com/pvpPbRj0/Screenshot-2025-12-25-175630.png",
      liveLink: "https://bookcourier-5924d.web.app/",
      codeLink: "https://github.com/emonahmed-dev/BookCourier-client.git",
      keyFeatures: [
        "Book request management",
        "Location-based library matching",
        "Real-time delivery tracking",
        "User authentication & profiles"
      ],
      techStack: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
        { name: "Firebase", icon: "🔥", color: "from-orange-400 to-red-400" },
        { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" }
      ]
    },
    {
      title: "ToyStore",
      description: "Full-featured e-commerce platform for toy management",
      fullDescription:
        "ToyStore is a fully functional e-commerce solution designed to manage online sales of toys. The platform efficiently handles product display, user authentication, shopping cart management, and the checkout process.",
      image: "https://i.ibb.co.com/pvb6Cn50/Screenshot-2025-12-08-230038.png",
      liveLink: "https://cosmic-creponne-24a271.netlify.app/",
      codeLink: "https://github.com/emonahmed-dev/Toy-store.git",
      featured: false,
      techStack: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
        { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
        { name: "Express", icon: "🚀", color: "from-gray-600 to-gray-700" },
        { name: "Stripe", icon: "💳", color: "from-purple-400 to-blue-500" }
      ]
    },
    {
      title: "Spotify-Clone",
      description: "Music streaming platform with playback controls",
      fullDescription:
        "This project is designed to mimic the user interface and core functionalities of Spotify. Through this, users will experience song play, pause, volume control, and playlist navigation. This is an attempt to showcase my front-end skills.",
      image: "https://i.ibb.co.com/m5dJrgLp/Screenshot-2025-12-08-160806.png",
      liveLink: "https://spotifycloneing.netlify.app/",
      codeLink: "https://github.com/emonahmed-dev/Spotify-Clone.git",
      featured: false,
      techStack: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
        { name: "Web Audio", icon: "🎵", color: "from-purple-400 to-pink-500" },
        { name: "CSS3", icon: "🎨", color: "from-orange-400 to-red-400" },
        { name: "Responsive", icon: "📱", color: "from-blue-500 to-purple-600" }
      ]
    },
    {
      title: "Home Service",
      description: "Service marketplace connecting users with local providers",
      fullDescription:
        "A modern platform and reliable household services in your local area. Built with a user-friendly design and effective search functionality for connecting homeowners with service professionals.",
      image: "https://i.ibb.co.com/chDHH48K/home-service.png",
      liveLink: "https://home-service-tau.vercel.app/",
      codeLink: "https://github.com/emonahmed-dev/HomeService.git",
      featured: false,
      techStack: [
        { name: "Next.js", icon: "▲", color: "from-gray-900 to-gray-700" },
        { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-blue-500" },
        { name: "Vercel", icon: "⚡", color: "from-gray-800 to-black" },
        { name: "PostgreSQL", icon: "🗄️", color: "from-blue-600 to-blue-800" }
      ]
    },
  ];

  const normalProjects = projects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const TechBadge = ({ tech }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-slate-700/50 to-slate-600/50 border border-slate-500/30 backdrop-blur-sm hover:border-slate-400/50 transition-colors duration-300"
    >
      <span className="text-lg">{tech.icon}</span>
      <span className="text-xs font-semibold text-slate-200">{tech.name}</span>
    </motion.div>
  );

  const ActionButton = ({ href, label, icon, variant = "primary" }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`btn-action inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
        variant === "primary"
          ? "btn-action-primary text-white"
          : "btn-action-secondary text-slate-100"
      }`}
    >
      {label}
      {icon}
    </motion.a>
  );

  return (
    <section id="projects" className="w-full py-20 sm:py-24 md:py-32 bg-gradient-to-b from-slate-900/0 via-slate-900/40 to-slate-900/0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A selection of projects that demonstrate my frontend and full-stack development skills.
          </p>
        </motion.div>

        {/* Projects Grid */}

        <div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {normalProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div className="relative bg-slate-900/90 border border-slate-700/70 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-slate-500/80 shadow-sm">

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-48 sm:h-56">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      alt={`Screenshot of the ${project.title} project`}
                      src={project.image}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title & Description */}
                    <div className="mb-4">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6 flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.08 }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-600/40 hover:border-slate-500/60 transition-colors duration-300"
                          >
                            <span className="text-sm">{tech.icon}</span>
                            <span className="text-xs font-medium text-slate-300">{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-2 pt-4 border-t border-slate-700/50"
                    >
                      <ActionButton
                        href={project.liveLink}
                        label="Demo"
                        icon={
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l6-6m0 0l-6 6m6-6v10" />
                          </svg>
                        }
                        variant="primary"
                      />
                      <ActionButton
                        href={project.codeLink}
                        label="Code"
                        icon={
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        }
                        variant="secondary"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
