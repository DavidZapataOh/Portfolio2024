import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Biography from '../components/Biography';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Work from '@/components/Work';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>David | Blockchain Developer</title>
        <meta name="description" content="Portfolio de David, un desarrollador Web3." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="#">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="biography">
        <Biography />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}
