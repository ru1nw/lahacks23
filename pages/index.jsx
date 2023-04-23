import Head from "next/head";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Consumer } from "@/components/Consumer";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";
import Profile from "@/components/Profile";

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
