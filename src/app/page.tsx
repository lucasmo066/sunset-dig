import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Hero />
      <WhatWeDo />
    </main>
  );
}
