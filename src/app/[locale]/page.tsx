import About from "@/components/shared/About"
import Introduction from "@/components/shared/Introduction" 
import Navbar from "@/components/shared/Navbar"
import Projects from "@/components/shared/Projects"

export default function Home() {
  return (
    <>
      <div id="main" className="w-screen h-screen overflow-x-hidden transition-all bg-background text-foreground selection:bg-zinc-800 selection:text-zinc-50 dark:selection:bg-zinc-300 dark:selection:text-zinc-900 scrollbar scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-400 scroll-thumb-rounded-full dark:scrollbar-track-zinc-900 dark:scrollbar-thumb-zinc-600 scroll-smooth">
        <Navbar />
        <Introduction />
        <About />
        <Projects />
      </div>
    </>
  );
}
