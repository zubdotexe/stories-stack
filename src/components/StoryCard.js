import React from "react";

export default function StoryCard({ story }) {
    return (
        <div className="card bg-base-200 hover:bg-base-300/50 w-full shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-3xl">{story.title}</h2>
                <h3>
                    by <span className="font-semibold">{story.author}</span>
                </h3>
                <div>
                    {story.tags.map((tag) => (
                        <div className="badge badge-soft badge-error mr-2">
                            {tag}
                        </div>
                    ))}
                </div>
                <p>{story.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Read Story</button>
                </div>
            </div>
        </div>
    );
}
