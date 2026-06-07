import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-varouss-black font-opensans">
      <HeroSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
