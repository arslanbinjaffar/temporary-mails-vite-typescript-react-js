import Hero from "@/components/common/Hero";
import { ReactNode } from "react";
import Blog from "@/components/blog/blogs";

function Home({ children }: { children: ReactNode }) {
  return (
    <>
      <Hero />
      {children}
      <Blog homeBlogs={6} />
    </>
  );
}

export default Home;
