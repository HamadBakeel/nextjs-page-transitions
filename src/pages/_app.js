import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import '@/styles/styles.scss';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Pages/Header';
import Footer from '@/components/Pages/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <title>Next.js Page Transitions Demo | Interactive Page Transitions</title>
                <meta name="description" content="Explore beautiful page transitions in Next.js with three unique animation styles: Curve, Inner, and Stairs. A demonstration of smooth, engaging page transitions using Framer Motion." />
                <meta name="keywords" content="next.js, page transitions, framer motion, animation, web development, react, interactive transitions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Next.js Page Transitions Demo | Interactive Page Transitions" />
                <meta property="og:description" content="Explore beautiful page transitions in Next.js with three unique animation styles. A demonstration of smooth, engaging page transitions using Framer Motion." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextjs-page-transitions-pearl.vercel.app" />
                <meta property="og:image" content="/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Next.js Page Transitions Demo" />
                <meta name="twitter:description" content="Explore beautiful page transitions in Next.js with three unique animation styles." />
                <meta name="twitter:image" content="/twitter-image.jpg" />
                <link rel="canonical" href="https://nextjs-page-transitions-pearl.vercel.app" />
            </Head>
            <div className='main'>
                <Toaster position="top-center" />
                <Header />
                <AnimatePresence mode='wait'>
                    <Component key={router.route} {...pageProps} />
                </AnimatePresence>
                <Footer />
            </div>
        </>
    )
}
