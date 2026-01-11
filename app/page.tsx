import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Skills,
  Services,
  Projects,
  Timeline,
  Contact,
  BlogPreview,
} from "@/components/sections";
import { getLatestPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Timeline />
        <BlogPreview posts={latestPosts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
