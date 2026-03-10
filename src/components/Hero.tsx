import { motion } from 'framer-motion';
import { Download, Eye, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-pixel text-4xl sm:text-5xl md:text-7xl text-neon-purple mb-6 animate-glow">
            WiZClient
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
            The Ultimate Minecraft Enhancement Client
          </p>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Enhance your Minecraft experience with powerful mods, performance optimization, and exclusive features
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection('downloads')}
            className="flex items-center space-x-2 bg-gradient-to-r from-neon-purple to-neon-cyan px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-neon-purple/50 transition-all transform hover:scale-105"
          >
            <Download size={24} />
            <span>Download Latest</span>
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-neon-cyan/50 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:border-neon-cyan transition-all transform hover:scale-105"
          >
            <Eye size={24} />
            <span>View Features</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <Users className="text-neon-cyan" size={20} />
            <span className="font-semibold text-white">50,000+</span>
            <span>Downloads</span>
          </div>
          <div className="flex items-center space-x-2">
            <Download className="text-neon-purple" size={20} />
            <span className="font-semibold text-white">10+</span>
            <span>Mod Packs</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-neon-cyan text-2xl">⚡</span>
            <span className="font-semibold text-white">100%</span>
            <span>Free</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 animate-float"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-2xl backdrop-blur-sm border border-neon-purple/30 flex items-center justify-center">
            <span className="text-6xl">🎮</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
