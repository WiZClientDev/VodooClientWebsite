import { Github, MessageCircle, Download } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-neon-purple/20 bg-[#0a0a0f]/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-pixel text-neon-purple text-xl mb-4">WiZClient</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              The ultimate Minecraft enhancement client with powerful features, performance
              optimization, and exclusive mods.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                aria-label="Discord"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('downloads')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Downloads
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mods')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Mods
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('guide')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Installation Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-purple/20 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">
            WiZClient is not affiliated with Mojang Studios or Microsoft Corporation
          </p>
          <p>&copy; {new Date().getFullYear()} WiZClient. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
