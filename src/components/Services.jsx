import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaServer, FaMobileAlt } from 'react-icons/fa'

function Services() {
    const services = [
        {
            icon: <FaCode className="text-4xl" />,
            title: 'Frontend Development',
            description: 'Creating polished React and Next.js experiences with clean architecture and production-ready UI.',
            color: '#3b82f6',
        },
        {
            icon: <FaPaintBrush className="text-4xl" />,
            title: 'Responsive UI Development',
            description: 'Building layouts that adapt seamlessly across devices with crisp typography and spacing.',
            color: '#8b5cf6',
        },
        {
            icon: <FaServer className="text-4xl" />,
            title: 'API Integration',
            description: 'Connecting frontend interfaces to backend services with smooth data flows and reliable error handling.',
            color: '#10b981',
        },
        {
            icon: <FaMobileAlt className="text-4xl" />,
            title: 'Performance Optimization',
            description: 'Refining load performance, bundle size, and runtime responsiveness for production-ready apps.',
            color: '#f59e0b',
        },
    ]

    return (
        <section id="services" className="w-full py-14 sm:py-16 md:py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display">
                        What I Do
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Services I offer to bring your ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group relative bg-slate-900/90 p-6 rounded-3xl border border-slate-700/70 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div className="mb-6 inline-flex p-4 rounded-xl bg-slate-900/95 transition-all duration-300 group-hover:scale-105" style={{ boxShadow: `0 12px 30px ${service.color}25` }}>
                                <div style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-display">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
