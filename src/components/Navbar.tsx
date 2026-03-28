import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-green-700 tracking-tighter">
          AFORE<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 md:hidden border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium hover:text-green-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium text-center shadow-md"
          >
            Contact Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
