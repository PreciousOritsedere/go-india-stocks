import Layout from "@/components/Layout";

export default function Home({ stocks }) {
  return (
    <Layout>
      <main className="flex items-center gap-10  py-4 px-6 overflow-y-scroll shadow-lg rounded-lg p-8 my-10 mx-12" >
      
        <section className=" max-w-4xl w-full py-4 px-6 overflow-y-scroll shadow-lg rounded-lg p-8 my-10 mx-12">
          {/* <StockList stocks={stocks} /> */}
        </section>
      </main>
    </Layout>
  );
}

