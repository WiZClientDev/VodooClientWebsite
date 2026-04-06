import { motion } from 'framer-motion';
import { Download, Crosshair, AlertTriangle, Shield } from 'lucide-react';

interface Cheat {
  name: string;
  game: string;
  description: string;
  features: string[];
  status: 'undetected' | 'detected' | 'maintenance';
  version: string;
  downloadUrl: string;
  type?: 'EXT' | 'INT';
}

const cheats: Cheat[] = [
  {
    name: 'VoodoCS2',
    game: 'Counter-Strike 2',
    description: 'Advanced CS2 cheat with aimbot, wallhack, and triggerbot. Optimized for competitive play with built-in safety features.',
    features: ['Aimbot', 'ESP/Wallhack', 'Triggerbot', 'Radar Hack'],
    status: 'undetected',
    version: 'v3.2.1',
    downloadUrl: '#',
    type: 'EXT',
  },
  {
    name: 'VoodoCS2',
    game: 'Counter-Strike 2',
    description: 'Internal CS2 cheat with memory-based features and advanced customization.',
    features: ['Memory Aimbot', 'Glow ESP', 'Skin Changer', 'Bhop'],
    status: 'undetected',
    version: 'v3.2.1',
    downloadUrl: '#',
    type: 'INT',
  },
];

const statusConfig = {
  undetected: {
    color: 'emerald',
    icon: Shield,
    text: 'Undetected',
  },
  detected: {
    color: 'red',
    icon: AlertTriangle,
    text: 'Detected',
  },
  maintenance: {
    color: 'amber',
    icon: AlertTriangle,
    text: 'Maintenance',
  },
};

export default function CheatDownloads() {
  return (
    <section id="cheats" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Crosshair className="text-red-400" size={16} />
            <span className="text-red-400 text-sm font-semibold">CS2 CHEATS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-300 to-amber-400 bg-clip-text text-transparent">
            Counter-Strike 2
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose between External or Internal cheats for CS2
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cheats.map((cheat, index) => {
            const statusInfo = statusConfig[cheat.status];
            const StatusIcon = statusInfo.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${statusInfo.color}-500/10 to-orange-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />

                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-red-500/20 hover:border-red-400/40 rounded-xl p-6 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{cheat.name} {cheat.type}</h3>
                      <p className="text-red-400 text-sm font-medium">{cheat.game}</p>
                    </div>
                    <div className={`flex items-center space-x-1 bg-${statusInfo.color}-500/20 border border-${statusInfo.color}-500/30 rounded-full px-3 py-1 text-xs font-semibold text-${statusInfo.color}-400`}>
                      <StatusIcon size={12} />
                      <span>{statusInfo.text}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                    {cheat.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Features
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {cheat.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-2 text-xs bg-white/5 rounded-lg px-2 py-1.5 border border-red-500/20"
                        >
                          <div className="w-1 h-1 rounded-full bg-red-400" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500 font-mono">{cheat.version}</span>
                    <a
                      href={cheat.downloadUrl}
                      className={`flex items-center space-x-2 ${
                        cheat.status === 'maintenance'
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 hover:shadow-lg hover:shadow-red-500/50'
                      } text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300`}
                      onClick={(e) => cheat.status === 'maintenance' && e.preventDefault()}
                    >
                      <Download size={16} />
                      <span>{cheat.status === 'maintenance' ? 'Coming Soon' : 'Download'}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 backdrop-blur-xl border border-amber-500/30 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="text-amber-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-amber-400 font-bold mb-2">Important Notice</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Use these cheats at your own risk. While we implement safety features and regular updates,
                  there is always a risk of detection and account bans. We recommend using alternate accounts
                  and following our safety guidelines in the Discord server.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
