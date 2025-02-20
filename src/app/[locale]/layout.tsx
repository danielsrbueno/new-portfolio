import { getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({children, params: { locale } }: Props) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
