import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import "@mdxeditor/editor/style.css"
import { ClerkProvider } from "@/services/clerk/components/ClerkProvider"
import { Toaster } from "@/components/ui/sonner"
import { UploadThingSSR } from "@/services/uploadthing/components/UploadThingSSR"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "JoNav-AI-Powered Recruitment App",
  description: "基于 Next.js 与 AI 构建的企业级多租户招聘 SaaS 系统，提供智能简历分析与人岗匹配服务",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        >
          {children}
          <Toaster />
          <UploadThingSSR />
        </body>
      </html>
    </ClerkProvider>
  )
}
