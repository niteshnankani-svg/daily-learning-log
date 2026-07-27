import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import RiskSection from './components/RiskSection.jsx';
import CategoryGrid from './components/CategoryGrid.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import TrustBlock from './components/TrustBlock.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-signal-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <RiskSection />
        <CategoryGrid />
        <HowItWorks />
        <TrustBlock />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
