import { useState } from "react";
import Layout from "@/components/Layout";
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";

export default function Home() {
  const [activeTab, setActiveTab] = useState("discussion"); // default active tab
  return (
    <Layout>
      <main className="m-auto w-full flex flex-col gap-10 overflow-y-auto">
        <section className="sm:hidden">
          {" "}
          {/* Hide tabs on larger screens */}
          <div className="flex">
            <button
              className={`flex-1 p-4 focus:outline-none ${
                activeTab === "discussion"
                  ? "text-white bg-slate-900"
                  : "bg-slate-900"
              }`}
              onClick={() => setActiveTab("discussion")}
            >
              Discussion Forum
            </button>
            <button
              className={`flex-1 p-4 focus:outline-none ${
                activeTab === "market"
                  ? "text-white bg-blue-600"
                  : "bg-blue-200"
              }`}
              onClick={() => setActiveTab("market")}
            >
              Market Stories
            </button>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row">
          {/* Show DiscussionForum component when activeTab is 'discussion' or on larger screens */}
          <div
            className={`flex-1 ${
              activeTab !== "market" ? "block" : "hidden sm:block"
            }`}
          >
            <DiscussionForum />
          </div>
          {/* Show MarketStories component when activeTab is 'market' or on larger screens */}
          <div
            className={`flex-1 ${
              activeTab !== "discussion" ? "block" : "hidden sm:block"
            }`}
          >
            <MarketStories />
          </div>
        </section>
      </main>
    </Layout>
  );
}
