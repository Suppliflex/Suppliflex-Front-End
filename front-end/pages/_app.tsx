import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // Here Where i Force dark mode by default by adding dark class to the html element
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('dark');
  }

  return <Component {...pageProps} />;
}

export default MyApp;
