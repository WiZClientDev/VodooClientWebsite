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
          <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-neon-purple mb-4">
            Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Packed with powerful features to enhance your Minecraft gameplay
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
                className="bg-white/5 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-6 hover:border-neon-cyan/50 hover:bg-white/10 transition-all group"
              >
                <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-neon-cyan" size={24} />
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
