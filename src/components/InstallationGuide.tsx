import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Apple, Cpu } from 'lucide-react';

export default function InstallationGuide() {
  const [activeOS, setActiveOS] = useState<'windows' | 'mac' | 'linux'>('windows');

  const instructions = {
    windows: [
      'Download the Voodo installer for your Minecraft version',
      'Run the installer (.exe file) and follow the on-screen instructions',
      'Launch Minecraft and select the Voodo profile from the launcher',
      'Enjoy your enhanced Minecraft experience!',
    ],
    mac: [
      'Download the Voodo installer for macOS',
      'Open the .dmg file and drag Voodo to your Applications folder',
      'Right-click and select "Open" to bypass Gatekeeper (first time only)',
      'Launch Minecraft and select the Voodo profile',
    ],
    linux: [
      'Download the Voodo .jar file for your Minecraft version',
      'Move the file to your Minecraft directory: ~/.minecraft/mods/',
      'Make sure you have Java installed (java -version)',
      'Launch Minecraft with the Forge/Fabric profile',
    ],
  };

  const paths = {
    windows: 'C:\\Users\\YourName\\AppData\\Roaming\\.minecraft\\mods',
    mac: '~/Library/Application Support/minecraft/mods',
    linux: '~/.minecraft/mods',
  };

  return (
    <section id="guide" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-neon-cyan mb-4">
            Installation Guide
          </h2>
          <p className="text-gray-400 text-lg">
            Follow these simple steps to install Voodo
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveOS('windows')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeOS === 'windows'
                ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Monitor size={20} />
            <span>Windows</span>
          </button>
          <button
            onClick={() => setActiveOS('mac')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeOS === 'mac'
                ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Apple size={20} />
            <span>Mac</span>
          </button>
          <button
            onClick={() => setActiveOS('linux')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeOS === 'linux'
                ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Cpu size={20} />
            <span>Linux</span>
          </button>
        </div>

        <motion.div
          key={activeOS}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-sm border border-neon-purple/20 rounded-xl p-8"
        >
          <div className="space-y-6">
            {instructions[activeOS].map((instruction, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-300 pt-1">{instruction}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-black/30 rounded-lg border border-neon-cyan/30">
            <div className="text-sm text-gray-500 mb-2">Installation Path:</div>
            <code className="text-neon-cyan font-mono">{paths[activeOS]}</code>
          </div>

          <div className="mt-6 p-4 bg-neon-purple/10 border border-neon-purple/30 rounded-lg">
            <p className="text-sm text-gray-300">
              <strong className="text-neon-purple">Note:</strong> Make sure you have the correct
              version of Minecraft installed before running Voodo. For modded versions, ensure
              Forge or Fabric is properly installed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
