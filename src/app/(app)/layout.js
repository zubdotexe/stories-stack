import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "StoriesStack",
    description: "Stories by you, for you",
};

export default function AppLayout({ children }) {
    return (
        <div className={`${inter.variable} ${geistMono.variable} antialiased`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
