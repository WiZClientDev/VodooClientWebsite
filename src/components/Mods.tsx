import { motion } from 'framer-motion';
import { Download, TrendingUp } from 'lucide-react';

interface Mod {
  name: string;
  description: string;
  versions: string[];
  fileSize: string;
  downloads: string;
}

const mods: Mod[] = [
  {
    name: 'WiZ PvP Pack',
    description: 'Complete PvP enhancement pack with optimized textures and HUD overlays',
    versions: ['1.8.9', '1.12.2', '1.16.5'],
    fileSize: '12.5 MB',
    downloads: '25,000+',
  },
  {
    name: 'WiZ Optimization Plus',
    description: 'Maximum performance optimization for lower-end systems',
    versions: ['1.16.5', '1.18.2', '1.20.x'],
    fileSize: '8.2 MB',
    downloads: '18,500+',
  },
  {
    name: 'WiZ HUD Collection',
    description: 'Customizable HUD elements including armor status, coordinates, and more',
    versions: ['1.8.9', '1.12.2', '1.16.5', '1.18.2'],
    fileSize: '5.3 MB',
    downloads: '32,000+',
  },
  {
    name: 'WiZ Minimap Enhanced',
    description: 'Advanced minimap with waypoints, mob tracking, and cave mapping',
    versions: ['1.12.2', '1.16.5', '1.18.2', '1.20.x'],
    fileSize: '10.1 MB',
    downloads: '22,000+',
  },
  {
    name: 'WiZ Texture Pack Bundle',
    description: 'Collection of popular texture packs optimized for WiZClient',
    versions: ['1.8.9', '1.12.2', '1.16.5', '1.18.2', '1.20.x'],
    fileSize: '45.7 MB',
    downloads: '40,000+',
  },
  {
    name: 'WiZ Shaders Lite',
    description: 'Performance-friendly shaders for beautiful lighting effects',
    versions: ['1.16.5', '1.18.2', '1.20.x'],
    fileSize: '28.4 MB',
    downloads: '15,000+',
  },
];

export default function Mods() {
  return (
    <section id="mods" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-neon-purple mb-4">
            Mods & Addons
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Extend WiZClient with our curated collection of mods and addons
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mods.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-6 hover:border-neon-cyan/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-neon-cyan mb-3">{mod.name}</h3>
              <p className="text-gray-400 mb-4">{mod.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {mod.versions.map((version) => (
                  <span
                    key={version}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    MC {version}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <span>Size: {mod.fileSize}</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp size={14} />
                  <span>{mod.downloads} downloads</span>
                </div>
              </div>

              <a
                href="#"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-neon-purple to-neon-cyan px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all w-full"
              >
                <Download size={18} />
                <span>Download Mod</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
