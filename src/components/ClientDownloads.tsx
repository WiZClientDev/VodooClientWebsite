import { motion } from 'framer-motion';
import { Download, Star, Shield, Zap } from 'lucide-react';

interface Client {
  name: string;
  game: string;
  version: string;
  description: string;
  features: string[];
  type: 'ghost' | 'blatant';
  downloadUrl: string;
  isRecommended?: boolean;
}

const clients: Client[] = [
  {
    name: 'Voodo Ghost',
    game: 'Minecraft 1.8.9',
    version: 'v2.1.0',
    description: 'Silent, undetectable client designed for competitive play. Bypasses most anticheats including Hypixel.',
    features: ['Reach 3.2', 'Velocity 90%', 'Aim Assist', 'AutoClicker 14-18 CPS'],
    type: 'ghost',
    downloadUrl: 'https://direct-link.net/1223974/0T99i058jxf8',
    isRecommended: true,
  },
  {
    name: 'Voodo Blatant',
    game: 'Minecraft 1.8.9',
    version: 'v2.1.0',
    description: 'Full-featured blatant client with no restrictions. Dominate any server with advanced modules.',
    features: ['Fly', 'Speed', 'KillAura', 'NoFall'],
    type: 'blatant',
    downloadUrl: '#',
  },
];

export default function ClientDownloads() {
  return (
    <section id="clients" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm font-semibold">MAIN CLIENTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Minecraft Clients
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose between Ghost mode for undetected play or Blatant mode for maximum power
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                client.type === 'ghost'
                  ? 'from-emerald-500/20 to-cyan-500/20'
                  : 'from-red-500/20 to-orange-500/20'
              } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`} />

              <div className={`relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border ${
                client.type === 'ghost'
                  ? 'border-emerald-500/30 hover:border-emerald-400/50'
                  : 'border-red-500/30 hover:border-red-400/50'
              } rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-[1.02]`}>

                {client.isRecommended && (
                  <div className="absolute -top-3 right-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                    <Star size={12} fill="currentColor" />
                    <span>RECOMMENDED</span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`inline-flex items-center space-x-2 ${
                      client.type === 'ghost' ? 'text-emerald-400' : 'text-red-400'
                    } text-sm font-semibold mb-3`}>
                      <Zap size={16} />
                      <span className="uppercase tracking-wider">{client.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{client.name}</h3>
                    <p className={`text-sm font-medium ${
                      client.type === 'ghost' ? 'text-emerald-400/80' : 'text-red-400/80'
                    }`}>
                      {client.game} • {client.version}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {client.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Key Features
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {client.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center space-x-2 text-sm bg-white/5 rounded-lg px-3 py-2 border ${
                          client.type === 'ghost'
                            ? 'border-emerald-500/20'
                            : 'border-red-500/20'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          client.type === 'ghost' ? 'bg-emerald-400' : 'bg-red-400'
                        }`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={client.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 bg-gradient-to-r ${
                    client.type === 'ghost'
                      ? 'from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400'
                      : 'from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400'
                  } text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl ${
                    client.type === 'ghost'
                      ? 'hover:shadow-emerald-500/50'
                      : 'hover:shadow-red-500/50'
                  } transform hover:scale-[1.02]`}
                >
                  <Download size={20} />
                  <span>Download {client.type === 'ghost' ? 'Ghost' : 'Blatant'}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
