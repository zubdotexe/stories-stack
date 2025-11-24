import Link from "next/link";
import React from "react";

export default function Navbar() {
    const links = (
        <>
            <li>
                <Link className="hover:text-[#FF8A00]" href="">Read Stories</Link>
            </li>
            <li>
                <Link className="hover:text-[#FF8A00]" href="">Add Story</Link>
            </li>
            <li>
                <Link className="hover:text-[#FF8A00]" href="">Manage Stories</Link>
            </li>
        </>
    );
    return (
        <div className="bg-[#FFFFFF] sticky border-b border-[#D8D6CF]">
            <nav className="flex justify-between max-w-7xl mx-auto p-2 font-semibold">
                <div>StoryTime</div>
                <ul className="flex gap-3">{links}</ul>
                <div>
                    <div className="flex gap-3">
                        <Link href="">Login</Link>
                        <Link href="">Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
