"use client"

import { Spotlight } from "../ui/spotlight-new"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { AuroraText } from "../ui/aurora-text"
import { InteractiveHoverButton } from "../ui/interative-button"
import { AnimatedSubscribeButton } from "../ui/animated-button"
import { ChevronRightIcon } from "lucide-react"

interface IIntroductionProps {
  width: number
  height: number
}

export default function Introduction() {
  const [screenSize, setScreenSize] = useState<IIntroductionProps>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const t = useTranslations("intro")
  const auroraText = ["#2f0d68", "#193cb8", "#2f0d68", "#193cb8", "#2f0d68", "#193cb8"]

  // const gradientsOrange = {
  //   gradientFirst: "radial-gradient(50% 50% at 50% 50%, hsla(30, 100%, 85%, 0.25) 0%, hsla(30, 100%, 55%, 0.12) 80%, transparent 100%)",
  //   gradientSecond: "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.3) 0%, hsla(210, 100%, 55%, 0.15) 80%, transparent 100%)",
  //   gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(30, 100%, 85%, 0.2) 0%, hsla(30, 100%, 45%, 0.1) 80%, transparent 100%)",
  // }

  // const gradientsPurple = {
  //   gradientFirst: "radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, 0.25) 0%, hsla(280, 100%, 55%, 0.12) 80%, transparent 100%)",
  //   gradientSecond: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(280, 100%, 85%, 0.3) 0%, hsla(280, 100%, 55%, 0.15) 50%, hsla(280, 100%, 45%, 0.05) 80%)",
  //   gradientThird: "radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, 0.2) 0%, hsla(280, 100%, 45%, 0.1) 80%, transparent 100%)",
  // }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-screen h-screen min-h-[560px] relative flex flex-col items-center justify-center text-center select-none">
      <Spotlight xOffset={150} width={screenSize.width} height={screenSize.height} duration={6} translateY={0} />
      <h1 className="font-bold text-8xl text-zinc-950 dark:text-zinc-300 z-10 max-sm:text-4xl max-sm:px-3">{t("title")}</h1>
      <AuroraText className="font-extrabold text-8xl" colors={auroraText}>{t("spantitle")}!</AuroraText>
      <p className="text-xl font-medium text-slate-500 mt-5 max-sm:text-base max-sm:px-3 dark:text-zinc-400">{t("subtitle")}</p>
      <div className="flex gap-10 items-center justify-center mt-10">
        <a href="https://github.com/danielsrbueno" target="_blank" rel="noreferrer">
          <InteractiveHoverButton>GitHub</InteractiveHoverButton>
        </a>
        <a href="https://www.linkedin.com/in/danielsrbueno" target="_blank" rel="noreferrer">
          <AnimatedSubscribeButton className="bg-blue-500/10 hover:bg-blue-500/50 transition-all duration-300">
            <span className="group inline-flex items-center">
              LinkedIn
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center">
              LinkedIn
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </AnimatedSubscribeButton>
        </a>
      </div>
    </div>
  );
}