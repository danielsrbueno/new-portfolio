/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "./config"

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./assets/lang/${locale}.json`)).default
  }
})