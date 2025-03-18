"use client"

import { BriefcaseBusiness, ContactRound, House, PhoneCall, Settings2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { JetBrains_Mono } from "next/font/google"
import Link from "next/link"
import { useEffect, useState } from "react"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
})

export default function Navbar() {
  const t = useTranslations("nav")

  const liStyle = "cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100"

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="w-7/12 h-24 left-12 top-1 px-12 rounded-full rounded-tl-none fixed flex items-center justify-between backdrop-blur-sm select-none z-40 dark:text-zinc-300 dark:bg-zinc-900/20 max-xl:w-9/12 max-lg:px-10 max-md:w-10/12 max-md:h-20 max-md:top-auto max-md:bottom-5 max-md:left-0 max-md:right-0 max-md:mx-auto max-md:rounded-full max-sm:h-16">
      <h1
      className={`${jetBrainsMono.className} font-extrabold my-gradient-radial max-sm:text-2xl max-lg:text-3xl lg:text-5xl max-md:hidden`}>
        &lt;Dan/&gt;
      </h1>
      {!isMobile && 
        <ul className="flex font-medium text-lg mr-[10%] gap-7 text-zinc-700 dark:text-zinc-300 max-lg:font-semibold max-lg:text-base max-lg:gap-4 max-lg:mr-2">
          <Link href="/">
            <li className={liStyle}>{t("home")}</li>
          </Link>
          <Link href="/about">
            <li className={liStyle}>{t("about")}</li>
          </Link>
          <Link href="/projects">
            <li className={liStyle}>{t("projects")}</li>
          </Link>
          <Link href="/contact">
            <li className={liStyle}>{t("contact")}</li>
          </Link>
        </ul>
      }
      {isMobile &&
        <ul className="w-full flex gap-10 items-center justify-center text-zinc-700 dark:text-zinc-300">
          <Link href="/about">
            <ContactRound className="w-8 h-8 cursor-pointer hover:scale-110 hover:text-zinc-950 dark:hover:text-zinc-50" />
          </Link>
          <Link href="/projects">
            <BriefcaseBusiness className="w-8 h-8 cursor-pointer hover:scale-110 hover:text-zinc-950 dark:hover:text-zinc-50" />
          </Link>
          <Link href="/">
            <House className="w-8 h-8 cursor-pointer hover:scale-110 hover:text-zinc-950 dark:hover:text-zinc-50" />
          </Link>
          <Link href="/contact">
            <PhoneCall className="w-7 h-7 cursor-pointer hover:scale-110 hover:text-zinc-950 dark:hover:text-zinc-50" />
          </Link>
          <Settings2 className="w-8 h-8 cursor-pointer hover:scale-110 hover:text-zinc-950 dark:hover:text-zinc-50" />
          {/* <Notebook className="w-8 h-8" /> */}
        </ul>
      }
    </nav>
  )
}