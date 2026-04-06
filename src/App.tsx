import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ClientDownloads from './components/ClientDownloads';
import AddonDownloads from './components/AddonDownloads';
import CheatDownloads from './components/CheatDownloads';
import InstallationGuide from './components/InstallationGuide';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0a15] to-[#0a0a0f] text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <ClientDownloads />
        <AddonDownloads />
        <CheatDownloads />
        <InstallationGuide />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
