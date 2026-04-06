import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Star } from 'lucide-react';

interface Version {
  mcVersion: string;
  clientVersion: string;
  releaseDate: string;
  isLatest?: boolean;
}

const stableVersions: Version[] = [
  { mcVersion: '1.20.4', clientVersion: '2.5.0', releaseDate: '2024-02-15', isLatest: true },
  { mcVersion: '1.19.4', clientVersion: '2.4.2', releaseDate: '2024-01-20' },
  { mcVersion: '1.18.2', clientVersion: '2.3.1', releaseDate: '2023-12-10' },
  { mcVersion: '1.16.5', clientVersion: '2.2.0', releaseDate: '2023-11-05' },
  { mcVersion: '1.12.2', clientVersion: '2.1.0', releaseDate: '2023-10-15' },
  { mcVersion: '1.8.9', clientVersion: '2.0.5', releaseDate: '2023-09-20' },
];

const betaVersions: Version[] = [
  { mcVersion: '1.20.5', clientVersion: '2.6.0-beta.3', releaseDate: '2024-03-01', isLatest: true },
  { mcVersion: '1.20.4', clientVersion: '2.5.1-beta.2', releaseDate: '2024-02-25' },
];

const legacyVersions: Version[] = [
  { mcVersion: '1.7.10', clientVersion: '1.5.0', releaseDate: '2023-08-10' },
  { mcVersion: '1.16.1', clientVersion: '1.4.2', releaseDate: '2023-07-15' },
  { mcVersion: '1.15.2', clientVersion: '1.3.0', releaseDate: '2023-06-20' },
];

export default function Downloads() {
  const [activeTab, setActiveTab] = useState<'stable' | 'beta' | 'legacy'>('stable');

  const getVersions = () => {
    switch (activeTab) {
      case 'stable':
        return stableVersions;
      case 'beta':
        return betaVersions;
      case 'legacy':
        return legacyVersions;
    }
  };

  return (
    <section id="downloads" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-neon-cyan mb-4">
            Downloads
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your Minecraft version and download Voodo
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 space-x-4">
          {['stable', 'beta', 'legacy'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVersions().map((version, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-6 hover:border-neon-cyan/50 transition-all relative"
            >
              {version.isLatest && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-neon-purple to-neon-cyan px-3 py-1 rounded-full text-xs font-bold">
                    <Star size={12} />
                    <span>Latest</span>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  MC {version.mcVersion}
                </div>
                <div className="text-gray-400">
                  Version {version.clientVersion}
                </div>
              </div>

              <div className="mb-6 text-sm text-gray-500">
                Released: {version.releaseDate}
              </div>

              <a
                href="#"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-neon-purple to-neon-cyan px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all w-full"
              >
                <Download size={18} />
                <span>Download</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
