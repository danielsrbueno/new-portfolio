"use client"

import { Spotlight } from "../ui/spotlight-new"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { AuroraText } from "../ui/aurora-text"
import { InteractiveHoverButton } from "../ui/interative-button"
import { AnimatedSubscribeButton } from "../ui/animated-button"
import { ChevronRightIcon } from "lucide-react"
import { useThemeStore } from "@/store/useThemeStore"
import { motion } from "framer-motion"

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
  
  const { theme } = useThemeStore()
  
  const spotlightColors = {
    light: [
      "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .32) 0, hsla(210, 100%, 55%, .08) 50%, hsla(210, 100%, 45%, 0) 80%)",
      "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .24) 0, hsla(210, 100%, 55%, .08) 80%, transparent 100%)",
      "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .16) 0, hsla(210, 100%, 45%, .08) 80%, transparent 100%)"
    ],
    dark: [
      "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
      "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
      "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
    ]
  }

  const auroraTextColors = {
    light: ["#2dd4bf", "#0e7490", "#2dd4bf", "#0e7490", "#2dd4bf", "#0e7490"],
    dark: ["#2f0d68", "#193cb8", "#2f0d68", "#193cb8", "#2f0d68", "#193cb8"]
  }

  const spotlightColorsSelected = theme === "light" ? spotlightColors.light : spotlightColors.dark
  const auroraTextColorsSelected = theme === "light" ? auroraTextColors.light : auroraTextColors.dark

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
    <div id="home" className="w-screen h-screen min-h-[560px] relative flex flex-col items-center justify-center text-center select-none">
      <Spotlight xOffset={50} width={screenSize.width} height={screenSize.height} duration={6} translateY={0} gradientFirst={spotlightColorsSelected[0]} gradientSecond={spotlightColorsSelected[1]} gradientThird={spotlightColorsSelected[2]} />
      <motion.div
        initial={{ opacity: 0, translateY: -120 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.75, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-center z-20 max-sm:px-5 max-sm:w-full max-sm:h-full max-sm:gap-5 max-sm:mt-10"
      >
        <h1 className="font-bold text-8xl z-10 max-sm:text-4xl max-sm:px-3">{t("title")}</h1>
        <AuroraText className="font-extrabold text-8xl" colors={auroraTextColorsSelected} speed={.8}>{t("spantitle")}!</AuroraText>
        <p className="text-xl font-medium text-zinc-500 max-sm:text-base max-sm:px-3">{t("subtitle")}</p>
        <div className="flex gap-10 items-center justify-center mt-5">
          <a href="https://github.com/danielsrbueno" target="_blank" rel="noreferrer">
            <InteractiveHoverButton>GitHub</InteractiveHoverButton>
          </a>
          <a href="https://www.linkedin.com/in/danielsrbueno" target="_blank" rel="noreferrer">
            <AnimatedSubscribeButton className="bg-blue-500/10 hover:bg-blue-500/50 transition-all duration-300 text-foreground/85 hover:text-foreground">
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
      </motion.div>
    </div>
  )
}