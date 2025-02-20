import createMiddleware from "next-intl/middleware"
import { locales } from "@/config"

export default  createMiddleware({
  locales,
  defaultLocale: 'pt'
})

export const config = {
  matcher: ["/", "/(pt|en)/:path*"]
}