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
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
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
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`w-full sticky top-0 z-50 transition-all duration-500 navbar-glass ${
        isScrolled ? 'navbar-glass--scrolled' : 'navbar-glass--top'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">

          {/* Logo */}
          <button
            className="navbar-logo"
            onClick={handleScrollToHome}
            aria-label="Scroll to home section"
          >
            <span className="navbar-logo-letter">E</span>
            <span className="navbar-logo-wordmark">mon Ahmed</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className={`nav-link nav-link--glass text-sm font-medium transition-colors cursor-pointer px-4 py-2 rounded-full ${
                  activeSection === link.to ? 'active' : ''
                }`}
                onClick={() => setActiveSection(link.to)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="hidden md:inline-flex navbar-cta cursor-pointer"
            >
              Hire Me
            </Link>
            <button
              className="md:hidden navbar-hamburger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="material-icons-outlined text-slate-200 text-[22px]">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden border-t border-white/[0.06]"
        >
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className={`nav-link nav-link--glass text-sm font-medium block py-2.5 px-4 rounded-xl transition-colors cursor-pointer ${
                  activeSection === link.to ? 'active' : ''
                }`}
                onClick={() => {
                  setActiveSection(link.to);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

export default Header;
