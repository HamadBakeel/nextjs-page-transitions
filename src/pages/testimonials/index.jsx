import Curve from '@/components/Layout/Curve'
import PageTransition from '@/components/Layout/PageTransition'
import Container from '@/components/Pages/Container'
import Section from '@/components/Pages/Section'
import Testimonials from '@/components/Pages/Testimonials'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Testimonials | Next.js Page Transitions Demo</title>
        <meta name="description" content="Read testimonials from our clients and discover how our page transitions enhance their experience." />
        <meta name="keywords" content="next.js testimonials, client feedback, page transitions, framer motion testimonials" />
        <meta property="og:title" content="Testimonials | Next.js Page Transitions Demo" />
        <meta property="og:description" content="Discover what our clients say about our services and the beautiful page transitions we offer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextjs-page-transitions-pearl.vercel.app/testimonials" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Testimonials | Next.js Page Transitions" />
        <meta name="twitter:description" content="Hear from our clients about their experiences with our page transitions." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="canonical" href="https://nextjs-page-transitions-pearl.vercel.app/testimonials" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
        <link rel="apple-touch-icon-precomposed" href="/favicon/apple-icon-precomposed.png" />

        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="36x36" href="/favicon/android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/favicon/android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/favicon/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />

        {/* Microsoft Icons */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

        {/* Manifest */}
        <link rel="manifest" href="/favicon/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <PageTransition>
        <Container>
          <Section
            id="testimonials"
            title="What Our Clients Say"
            description="Hear from those who have partnered with us."
          >
            <Testimonials />
          </Section>
        </Container>
      </PageTransition>
    </>
  )
}
