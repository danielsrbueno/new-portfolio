import { useTranslations } from "next-intl"
import Image from "next/image"
import perfil from "../../../public/images/perfil.jpg"

export default function About() {
  const t = useTranslations("about")
  const tg = useTranslations("greeting")

  const hour = new Date().getHours()
  const greeting = hour >= 19 || hour <= 5 ? tg("night") : hour > 5 && hour <= 12  ? tg("morning") : tg("afternoon")

  const spotlight = "before:w-40 before:h-40 before:rounded-full before:z-0 before:blur-3xl before:absolute before:translate-x-1/12 before:translate-y-1/12 before:bg-amber-300/50 lg:before:h-64 lg:before:w-64"

  return (
    <div id="about" className="bg-zinc-100/10 w-full flex flex-col justify-around items-center text-justify py-12 relative shadow-lg">
      <h1 className="mb-6 text-4xl font-bold text-foreground">
        {t("title")}
      </h1>
      <div className="p-11 flex justify-around items-center text-justify max-lg:flex-col-reverse">
        <div className="w-5/12 text-xl font-normal flex flex-col gap-4 scale-105 indent-3 max-lg:w-10/12 max-sm:text-lg">
          <p>
            {greeting + t("paragraph.text1")}
          </p>
          <p>
            {t("paragraph.text2")}
          </p>
          <p>
          {t("paragraph.text3")}
          </p>
        </div>
        <div className={`w-1/3 h-full flex justify-center items-center ${spotlight} max-lg:mb-20`}>
          <Image src={perfil} width={440} alt={t("imgalt")} className="w-full min-w-60 max-w-[26rem] rounded-full z-10"  />
        </div>
      </div>
    </div>
  )
}