import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is Voodo safe to use?',
    answer:
      'Yes, Voodo is completely safe. All downloads are scanned for malware and the client is open-source, meaning anyone can review the code. We prioritize your security and privacy.',
  },
  {
    question: 'Will I get banned for using Voodo?',
    answer:
      'Voodo is designed to be compliant with most server rules. However, some features may not be allowed on certain servers. Always check your server\'s rules before using any client modifications.',
  },
  {
    question: 'What Minecraft versions are supported?',
    answer:
      'Voodo supports Minecraft versions 1.8.9, 1.12.2, 1.16.5, 1.18.2, and 1.20.x. We regularly update to support new versions as they are released.',
  },
  {
    question: 'Is Voodo free?',
    answer:
      'Yes! Voodo is completely free to download and use. There are no hidden costs, subscriptions, or in-app purchases. We believe everyone should have access to quality Minecraft enhancements.',
  },
  {
    question: 'Can I use Voodo with other mods?',
    answer:
      'Absolutely! Voodo is compatible with most popular mods. It works seamlessly with Forge and Fabric mod loaders. However, some conflicting mods may cause issues.',
  },
  {
    question: 'How do I update Voodo?',
    answer:
      'Simply download the latest version from our downloads page and install it. The new version will automatically replace the old one. Your settings and configurations will be preserved.',
  },
  {
    question: 'Where can I get support?',
    answer:
      'Join our Discord community for support, updates, and to connect with other Voodo users. Our team and community members are always ready to help with any issues.',
  },
  {
    question: 'Does Voodo work on servers?',
    answer:
      'Yes, Voodo works on multiplayer servers. However, make sure the features you\'re using are allowed by the server\'s rules. Some competitive servers may have restrictions on certain client modifications.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-neon-purple mb-4">
            FAQ
          </h2>
          <p className="text-gray-400 text-lg">
            Frequently asked questions about Voodo
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={`text-neon-cyan transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
