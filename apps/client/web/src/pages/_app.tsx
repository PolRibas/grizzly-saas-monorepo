// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/dashboard');
  console.log({ isDashboard })
  return (
    <div className={montserrat.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
