import Navbar from "@/components/shared/Navbar"

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-zinc-100 selection:bg-zinc-800 selection:text-zinc-50 dark:bg-zinc-900 dark:selection:bg-zinc-300 dark:selection:text-zinc-900 transition-all scrollbar scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-400 scroll-thumb-rounded-full dark:scrollbar-track-zinc-900 dark:scrollbar-thumb-zinc-600 ">
        <Navbar />
      </div>
    </>
  );
}
