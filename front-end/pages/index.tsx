import '../styles/globals.css';
import ThemeToggle from '../components/ThemeToggle';
import Header from './../components/Header';
import Intro from './../components/Intro';
import InfoBanner from '../components/InfoBanner';
import Features from './../components/Features';

export default function Home() {
  return (
    <main className="bg-black mx-auto text-white relative z-0 overflow-hidden">
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <Intro />
        <InfoBanner />
        <Features />

        {/* <ThemeToggle /> We can hide Toggle from here, until light mode is needed */}
      </div>
    </main>
  );
}
