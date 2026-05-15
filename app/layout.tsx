import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CARRIPREFA - Solutions Préfabriquées en Béton & Carrières | Marrakech",
  description:
    "CARRIPREFA, filiale de SYAM Holding, spécialisée dans la production de solutions préfabriquées en béton et l'exploitation de carrières à Marrakech.",
  keywords: [
    "carriprefa",
    "préfabriqué béton",
    "agglos",
    "agrégats",
    "bordures",
    "hourdis",
    "pavés",
    "poutrelles",
    "Marrakech",
    "carrière",
    "béton",
  ],
  openGraph: {
    title: "CARRIPREFA - Préfabrication Béton & Carrières",
    description:
      "Spécialiste en production de solutions préfabriquées en béton et exploitation de carrières à Marrakech.",
    locale: "fr_MA",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
        <WhatsAppButton />
      </body>
    </html>
  )
}
