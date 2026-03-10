import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import Mods from './components/Mods';
import InstallationGuide from './components/InstallationGuide';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Downloads />
        <Mods />
        <InstallationGuide />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
