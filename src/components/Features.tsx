import { motion } from 'framer-motion';
import { Zap, Eye, Keyboard, Crosshair, Sun, MousePointer, Package, Grid2x2 as Grid, Wifi, Settings } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'OptiFine Integration',
    description: 'Built-in OptiFine support for enhanced graphics and performance',
  },
  {
    icon: Zap,
    title: 'FPS Booster',
    description: 'Optimize your game performance and get higher frame rates',
  },
  {
    icon: Eye,
    title: 'Freelook & Zoom',
    description: 'Look around freely and zoom in on distant objects with ease',
  },
  {
    icon: Keyboard,
    title: 'Keystrokes HUD',
    description: 'Display your keystrokes and CPS on screen in real-time',
  },
  {
    icon: Sun,
    title: 'Fullbright',
    description: 'See clearly in the dark without torches or night vision',
  },
  {
    icon: MousePointer,
    title: 'AutoClicker',
    description: 'Automated clicking with configurable CPS limits',
  },
  {
    icon: Grid,
    title: 'Schematica',
    description: 'Build complex structures with holographic blueprints',
  },
  {
    icon: Crosshair,
    title: 'Custom Crosshair',
    description: 'Fully customizable crosshairs with multiple designs',
  },
  {
    icon: Wifi,
    title: 'Ping Display',
    description: 'Monitor your connection latency in real-time',
  },
  {
    icon: Package,
    title: 'Mod Manager',
    description: 'Easy-to-use interface for managing all your mods',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="text-cyan-400" size={16} />
            <span className="text-cyan-400 text-sm font-semibold">CORE FEATURES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for the ultimate gaming advantage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
