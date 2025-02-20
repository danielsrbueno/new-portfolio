"use client"

import Navbar from "@/components/shared/Navbar"
import gsap from "gsap"
import { useTranslations } from "next-intl"
import { useLayoutEffect, useRef } from "react"

export default function Home() {
  const t = useTranslations()
  const hour = new Date().getHours()
  const comp = useRef(null)
  let greeting

  if (hour >= 6 && hour < 12) greeting = t("greeting.morning")
  else if (hour >= 12 && hour < 18) greeting = t("greeting.afternoon")
  else greeting = t("greeting.night")

  useLayoutEffect(() => {
    const introSlider = document.querySelector("#intro-slider")
    const title1 = document.querySelector("#title-1")
    const title2 = document.querySelector("#title-2")

    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from(title1, {
          opacity: 0,
          y: "+=35",
          stagger: 0.5,
      }).from(title2, {
          opacity: 0,
          y: "+=35",
          stagger: 0.5,
          delay: 1,
      }).to(title1, {
          opacity: 0,
          y: "-=30",
          delay: 1, 
          stagger: 0.5,
      }).to(title2, {
          opacity: 0,
          y: "-=30",
          delay: 0,
          stagger: 0.5,
      })
      .to(introSlider, {
          xPercent: "-100",
          duration: 1.3,
      })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div id="window" className="w-screen h-screen overflow-x-hidden bg-zinc-100 selection:bg-zinc-800 selection:text-zinc-50 dark:bg-slate-900 dark:selection:bg-zinc-300 dark:selection:text-zinc-900 transition-all scrollbar scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-400 scroll-thumb-rounded-full dark:scrollbar-track-zinc-900 dark:scrollbar-thumb-zinc-600 ">
        <div className='h-screen p-10 bg-zinc-900 absolute top-0 left-0 z-50 w-full flex flex-col gap-4 tracking-tighter font-black font-jetbrains items-center justify-center  text-zinc-200' id='intro-slider'>
          <h1 className='max-sm:text-2xl sm:text-5xl lg:text-6xl' id='title-1'>{greeting}</h1>
          <h1 className='max-sm:text-2xl sm:text-5xl lg:text-6xl' id='title-2'>{t("welcome")}</h1>
        </div>
        <Navbar />
      </div>
    </>
  );
}
