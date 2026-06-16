import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma, FaGit } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiFirebase, SiPostman, SiExpress } from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="w-4 h-4" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="w-4 h-4" /> },
      { name: 'Express.js', icon: <SiExpress className="w-4 h-4" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4" /> },
      { name: 'Firebase', icon: <SiFirebase className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGit className="w-4 h-4" /> },
      { name: 'GitHub', icon: <FaGithub className="w-4 h-4" /> },
      { name: 'Postman', icon: <SiPostman className="w-4 h-4" /> },
      { name: 'Figma', icon: <FaFigma className="w-4 h-4" /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="font-display bg-background-light dark:bg-[#0f172a] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300 mb-3">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Technologies</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            A concise overview of the frameworks, backend tools, and product-oriented workflows I use daily.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5"
            >
              <h3 className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-4">
                {group.title}
              </h3>
              <div className="grid gap-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 transition-shadow duration-200 hover:shadow-[0_8px_25px_rgba(56,189,248,0.12)]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-cyan-300">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
