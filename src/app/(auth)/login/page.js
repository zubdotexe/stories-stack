"use client";

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function Login() {
    const { loginUser, loginWGoogle } = useContext(AuthContext);
    const router = useRouter();

    const handleGoogleLogin = () => {
        loginWGoogle()
            .then((res) => {
                console.log("", res);
                router.push("/");
            })
            .catch((error) => {
                alert("", error);
                toast.error(error.message);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("", email, password);

        loginUser(email, password)
            .then((res) => {
                console.log("", res);
                router.push("/");
            })
            .catch((error) => {
                console.log("", error);
                toast.error(error.message);
            });
    };

    return (
        <div className="p-10 max-w-5xl mx-auto flex justify-center">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-2xl">Login</legend>

                <form onSubmit={handleLogin}>
                    <label className="label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="input"
                        placeholder="Email"
                    />

                    <label className="label">Password</label>
                    <input
                        name="password"
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
