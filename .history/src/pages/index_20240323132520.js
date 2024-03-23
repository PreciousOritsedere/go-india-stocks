import { useState } from "react";
import Layout from "@/components/Layout";
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";

export default function Home() {
  const [activeTab, setActiveTab] = useState('discussion'); // default active tab
  return (
    <Layout>
      <main className="max-w-4xl w-full flex flex-col gap-10  py-4 px-6 overflow-y-auto" >
      <section>
        tabs here
      </section>

      <section>
        <DiscussionForum/>
        <MarketStories/>
      </section>
      
       
      </main>
    </Layout>
  );
}

