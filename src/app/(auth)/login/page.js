"use client";

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function Login() {
    const { loginWGoogle } = useContext(AuthContext);
    const router = useRouter();

    const handleGoogleLogin = () => {
        loginWGoogle()
            .then((res) => {
                console.log("", res);
                router.push("/");
            })
            .catch((error) => {
                alert("", error);
            });
    };

    return (
        <div className="p-10 max-w-5xl mx-auto flex justify-center">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-2xl">Login</legend>

                <form>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                    />

                    <button className="w-full btn btn-neutral mt-4">
                        Login
                    </button>
                    <p className="mt-2">
                        New here?{" "}
                        <Link className="font-semibold" href="/register">
                            Register
                        </Link>
                    </p>
                </form>
                <button
                    onClick={handleGoogleLogin}
                    className="w-full btn btn-secondary mt-2"
                >
                    Continue with Google
                </button>
            </fieldset>
        </div>
    );
}
