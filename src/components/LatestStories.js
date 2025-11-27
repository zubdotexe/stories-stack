"use client";

import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import Link from "next/link";

export default function LatestStories() {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/stories?limit=6`
    // );

    // const stories = await res.json();

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("/api/stories?limit=6")
            .then((res) => res.json())
            .then((data) => setStories(data))
            .catch(console.error);
    }, []);

    return (
        <div className="mt-10">
            <div className="max-w-7xl mx-auto p-2">
                <h1 className="font-bold text-3xl mb-5">Latest Stories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stories.map((story) => (
                        <StoryCard key={story._id} story={story} />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link href="/stories" className="btn btn-primary">
                        More Stories
                    </Link>
                </div>
            </div>
        </div>
    );
}
