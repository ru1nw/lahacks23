import Head from "next/head";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>SustainaBIZ - Finding local businesses that care</title>
        <meta
          name="description"
          content="SustainaBIZ matches you with local businesses that share your values to make the world a better place."
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
