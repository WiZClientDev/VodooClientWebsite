import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Downloads', id: 'downloads' },
    { name: 'Mods', id: 'mods' },
    { name: 'Guide', id: 'guide' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-neon-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="font-pixel text-neon-purple text-sm sm:text-lg hover:text-neon-cyan transition-colors"
            >
              WiZClient
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-neon-cyan transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#"
              className="flex items-center space-x-2 bg-gradient-to-r from-neon-purple to-neon-cyan px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all"
            >
              <Download size={16} />
              <span>Discord</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-neon-purple/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-300 hover:text-neon-cyan transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="#"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-neon-purple to-neon-cyan px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all"
              >
                <Download size={16} />
                <span>Discord</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
