import Head from "next/head";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push("/dashboard");
  }

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
