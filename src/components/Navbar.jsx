"use client";

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { LuUserRound } from "react-icons/lu";

export default function Navbar() {
    const links = (
        <>
            <li>
                <Link className="hover:text-primary" href="/stories">
                    Read Stories
                </Link>
            </li>
            <li>
                <Link className="hover:text-primary" href="">
                    Add Story
                </Link>
            </li>
            <li>
                <Link className="hover:text-primary" href="">
                    Manage Stories
                </Link>
            </li>
        </>
    );

    const { user, logoutUser } = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = () => {
        logoutUser()
            .then((res) => {
                console.log("", res);
                router.push("/login");
            })
            .catch((error) => {
                console.log("", error);
            });
    };

    return (
        <div className="bg-white border-b border-[var(--navbar-border)] sticky top-0 z-2">
            <div className="max-w-7xl mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link href="/">
                        <img className="w-12" src="storiesStack.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-3 px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <LuUserRound size={24} className="mr-2" />
                            <button
                                onClick={handleLogout}
                                className="btn btn-secondary"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <ul className="flex gap-3">
                                <li>
                                    <Link
                                        href="/login"
                                        className="btn btn-outline btn-primary hover:bg-[#FFF2E0] text-neutral"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/register"
                                        className="btn btn-primary"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
