import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // Force dark mode by default (add 'dark' class to <html>)
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('dark');
  }

  return <Component {...pageProps} />;
}

export default MyApp;
