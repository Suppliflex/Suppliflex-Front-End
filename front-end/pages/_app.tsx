import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme');
    const htmlClass = document.documentElement.classList;

    if (savedTheme === 'light') {
      htmlClass.remove('dark');
    } else {
      htmlClass.add('dark'); // Default to dark mode if no preference
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
