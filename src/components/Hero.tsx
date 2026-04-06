import { motion } from 'framer-motion';
import { Download, Shield, Zap, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Shield className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm font-semibold">UNDETECTED & SECURE</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              VoodooClient
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-6 font-semibold">
            Next-Gen Gaming Enhancement
          </p>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Advanced client software and game enhancements designed for competitive advantage.
            Undetected, powerful, and completely free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollToSection('clients')}
            className="group relative flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download size={24} className="relative z-10" />
            <span className="relative z-10">Download Now</span>
          </button>

          <button
            onClick={() => scrollToSection('features')}
            className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-400/60 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10 transform hover:scale-105"
          >
            <Zap size={24} className="text-blue-400" />
            <span>View Features</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <Users className="text-blue-400 mx-auto mb-3" size={32} />
            <div className="text-3xl font-bold text-white mb-1">50K+</div>
            <div className="text-gray-400 text-sm">Active Users</div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <Shield className="text-emerald-400 mx-auto mb-3" size={32} />
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400 text-sm">Undetected</div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <Zap className="text-purple-400 mx-auto mb-3" size={32} />
            <div className="text-3xl font-bold text-white mb-1">Free</div>
            <div className="text-gray-400 text-sm">Forever</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
