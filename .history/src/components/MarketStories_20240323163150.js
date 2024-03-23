import React from "react";
import marketStoriesData from "@/mockdata/marketStoriesData.json";

export default function MarketStories() {
  return (
    <div className="max-w-space-y-4">
      <section className="h-[100vh] flex flex-col gap-3 overflow-y-scroll">
        {marketStoriesData.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow rounded-md p-4 "
          >
            <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
            <p className="text-sm mb-2">{story.content}</p>
            <img
              className="w-full h-auto object-cover rounded-md"
              src={story.image}
              alt={story.title}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
