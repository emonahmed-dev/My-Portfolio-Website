import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, scroller } from 'react-scroll';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'HOME', to: 'home' },
    { name: 'ABOUT', to: 'about' },
    { name: 'PROJECTS', to: 'projects' },
    { name: 'SKILLS', to: 'skills' },
    { name: 'SERVICES', to: 'services' },
    { name: 'CONTACT', to: 'contact' },
  ];

  const handleScrollToHome = () => {
    scroller.scrollTo('home', {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.to))
      .filter(Boolean);

    if (!sections.length) return;

    const handleScroll = () => {
      if (window.scrollY < 96) {
        setActiveSection('home');
      }
      setIsScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          const topSection = visible.reduce((current, next) =>
            current.intersectionRatio > next.intersectionRatio ? current : next
          );
          setActiveSection(topSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.15, 0.3],
      }
    );

    observerRef.current = observer;
    sections.forEach((section) => observer.observe(section));

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/92 shadow-2xl shadow-slate-950/30 backdrop-blur-xl border-b border-white/10'
          : 'bg-white/90 dark:bg-gray-950/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center pb-4 relative">
          <button
            className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl font-display cursor-pointer transition-transform hover:scale-110"
            onClick={handleScrollToHome}
            aria-label="Scroll to home section"
          >
            E
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className={`nav-link text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors cursor-pointer ${activeSection === link.to ? 'active' : ''}`}
                onClick={() => setActiveSection(link.to)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="material-icons-outlined text-gray-900 dark:text-gray-200">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 flex flex-col space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className={`nav-link text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors block py-2 cursor-pointer ${activeSection === link.to ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(link.to);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
