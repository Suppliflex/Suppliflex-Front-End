import '../styles/globals.css';
import ThemeToggle from '../components/ThemeToggle';
import Header from './../components/Header';

export default function Home() {
  return (
    <main className="bg-black mx-auto">
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        {/* <ThemeToggle /> We can hide Toggle from here, until light mode is needed */}
      </div>
    </main>
  );
}
