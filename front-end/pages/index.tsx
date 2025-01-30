import '../styles/globals.css';
import ThemeToggle from '../components/ThemeToggle';
import Header from './../components/Header'

export default function Home() {
  return (
    <main className="dark:bg-dark-background bg-light-background max-w-7xl mx-auto">
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <ThemeToggle /> {/* We can hide Toggle from here, until light mode is needed */}
        <h1 className="text-4xl font-bold text-primary dark:text-white">SuppliFlex</h1>
        <p className="text-secondary">Your supply chain solution</p>
      </div>
    </main>
  );
}
