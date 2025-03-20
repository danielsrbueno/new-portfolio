import Introduction from "@/components/shared/Introduction"
import Navbar from "@/components/shared/Navbar"

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden transition-all bg-zinc-100 dark:bg-zinc-950 dark:selection:bg-zinc-300 dark:selection:text-zinc-900 selection:bg-zinc-800 selection:text-zinc-50 scrollbar scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-400 scroll-thumb-rounded-full dark:scrollbar-track-zinc-900 dark:scrollbar-thumb-zinc-600 ">
        <Navbar />
        <Introduction />
      </div>
    </>
  );
}
