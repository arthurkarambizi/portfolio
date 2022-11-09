import Head from 'next/head';
import { Header, Footer, Hero } from '../components';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    );
}