import { Footer } from "@/components/footer";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
    return (
        <div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
