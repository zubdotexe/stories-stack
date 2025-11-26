import { Geist, Geist_Mono, Inter } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";

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
    title: "StoriesStack - Register",
    description: "Stories by you, for you",
};

export default function AuthLayout({ children }) {
    return (
        <div className={`${inter.variable} ${geistMono.variable} antialiased`}>
            {children}
            <ToastContainer />
        </div>
    );
}
