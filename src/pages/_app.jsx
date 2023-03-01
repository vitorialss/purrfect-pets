import { Figtree } from 'next/font/google';
import '../styles/global.css';
import '../styles/main-section.css';

const font = Figtree({
  weight: ["600", "700"],
  style: ["normal"],
  subsets: ["latin"]

});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )};


export function App({ Component, pageProps }) {
  return <Component {...pageProps} />
};

