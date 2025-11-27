import StoryCard from "@/components/StoryCard";
import React from "react";

export default async function page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/stories`);

    const stories = await res.json();

    return (
        <div className="my-10">
            <div className="max-w-7xl mx-auto p-2">
                <h1 className="font-bold text-3xl mb-5">All Stories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stories.map((story) => (
                        <StoryCard key={story._id} story={story} />
                    ))}
                </div>
            </div>
        </div>
    );
}
