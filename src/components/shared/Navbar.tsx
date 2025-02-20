"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/all"
import { useEffect, useState, useLayoutEffect } from "react"
import { useTranslations } from "next-intl"
import { JetBrains_Mono } from "next/font/google"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
})

export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)

  const [menu, setMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const t = useTranslations("nav")

  const handleResize = () => {
    if (window.innerWidth <= 980) setIsMobile(true)
    else setIsMobile(false)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [section, setSection] = useState("")

  useEffect(() => {
    if (section) {
      gsap.to("#window", {
        duration: 0.75,
        ease: "expo.out",
        scrollTo: { y: section, offsetY: 80 }
      })
    }
  }, [section])

  useLayoutEffect(() => {
    const btn = document.getElementById("btn-menu")
    const nav = document.querySelector("nav")
    const ul = document.querySelector("ul")

    if (isMobile && menu) {
      gsap.to(nav, {
        duration: 0.5,
        height: "100vh",
        ease: "expo.out",
      });
      gsap.to(ul, {
        duration: 0.5,
        opacity: 1,
        ease: "expo.out",
      });
      gsap.to(btn, {
        duration: 0.5,
        rotate: 180,
        ease: "expo.out",
      });
    } else if (isMobile && !menu) {
      gsap.to(nav, {
        duration: 0.5,
        height: "4.5rem",
        ease: "expo.out",
      });
      gsap.to(ul, {
        duration: 0.5,
        opacity: 0,
        ease: "expo.out",
      });
      gsap.to(btn, {
        duration: 0.5,
        rotate: 0,
        ease: "expo.out",
      });
    }
  }, [isMobile, menu]);

  const fnUl = () => {
    if (isMobile && !menu) return " hidden "
    else if (isMobile && menu)
      return " flex flex-col gap-7 text-zinc-700 font-semibold text-lg text-center"
    else if (!isMobile)
      return " font-semibold text-lg flex gap-7 text-zinc-700 "
  }

  const fnNav = () => {
    if (isMobile && !menu)
      return " justify-between w-screen fixed backdrop-blur-sm flex items-center select-none z-40 min-sm:px-4 max-sm:px-12 max-md:px-20 max-lg:px-24 h-20 "
    else if (isMobile && menu)
      return " w-screen h-screen absolute top-0 left-0 select-none flex flex-col items-center justify-center backdrop-blur-xl z-40 gap-7 text-zinc-950 font-semibold text-lg"
    else if (!isMobile)
      return " justify-around w-screen fixed backdrop-blur-sm flex items-center select-none z-40 min-sm:px-4 max-sm:px-12 max-md:px-20 max-lg:px-24 h-20"
  }

  return (
    <nav className={fnNav() + " dark:text-zinc-300 dark:bg-zinc-900/20 bg-zinc-100/10"}>
      <h1
      className={ (isMobile && menu ? " text-4xl  font-extrabold my-gradient-radial -mt-12 mb-10" : " font-extrabold my-gradient-radial max-sm:text-2xl max-lg:text-4xl lg:text-5xl ") + `${jetBrainsMono.className}` }>
        &lt;Daniel /&gt;
      </h1>

      <ul className={fnUl() + " dark:text-zinc-300"}>
        <li
        id="link-1"
        className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100"
        onClick={() => { setSection("#introduction"); setMenu(false); }}>
          {t("home")}
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100"
          onClick={() => {
            setSection("#about");
            setMenu(false);
          }}
        >
          {t("about")}
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100 "
          onClick={() => {
            setSection("#projects");
            setMenu(false);
          }}
        >
          {t("projects")}
        </li>
        <li className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100" onClick={() => { setSection("#contact"); setMenu(false) }}> {t("contact")} </li>
      </ul>
      <button 
      id="btn-menu" 
      className={
        (isMobile ? "absolute top-7 right-10 pi pi-bars text-2xl z-50 " : "hidden ") +
        (isMobile && menu ? "absolute top-7 right-10 text-2xl" : "") + " select-none"
      }
      onClick={() => setMenu(!menu)}/>
    </nav>
  )
}