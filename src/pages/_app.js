import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import '@/styles/styles.scss';
import Header from '@/components/Pages/Header';
import Footer from '@/components/Pages/Footer';

export default function App({ Component, pageProps, router }) {
    return (
        <div className='main'>
          
            <Header/>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
            <Footer />
        </div>
    )
}
