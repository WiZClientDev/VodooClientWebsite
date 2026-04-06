import { motion } from 'framer-motion';
import { Download, Puzzle, TrendingUp, Package } from 'lucide-react';

interface Addon {
  name: string;
  description: string;
  compatibility: string;
  version: string;
  downloads: string;
  downloadUrl: string;
  icon: string;
}

const addons: Addon[] = [
  {
    name: 'Voodoaddon',
    description: 'Official Voodo addon with advanced modules and custom bypasses',
    compatibility: 'Voodo All Versions',
    version: 'v2.0.0',
    downloads: '25K+',
    downloadUrl: '#',
    icon: '🎯',
  },
];

export default function AddonDownloads() {
  return (
    <section id="addons" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Puzzle className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-semibold">EXTENSIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 bg-clip-text text-transparent">
            Addons & Extensions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Extend your client with powerful addons and enhancement packs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 rounded-xl p-6 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl">{addon.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{addon.name}</h3>
                    <p className="text-purple-400 text-sm font-medium">{addon.compatibility}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <TrendingUp size={14} />
                    <span>{addon.downloads}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {addon.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">{addon.version}</span>
                  <a
                    href={addon.downloadUrl}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
