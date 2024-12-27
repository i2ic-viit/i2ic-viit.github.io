import { Footer } from "@/components/footer";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
    const pageTitle = "I2IC - "+Component.name || "Default Title";
    // console.log(Component)
    return (
        <div>
            <Head>
                <title>{pageTitle}</title> 
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
