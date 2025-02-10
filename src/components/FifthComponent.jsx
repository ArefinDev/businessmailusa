"use client"


import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Send, Rss } from "lucide-react"
import { Separator } from "@/components/ui/separator"


export default function FifthComponent() {
  const hotStocks = [
    "Suzlon Energy Share Price",
    "Adani Enterprises Share Price",
    "Adani Power Share Price",
    "IRFC Share Price",
    "Tata Motors Share Price",
    "Tata Steel Share Price",
    "Yes Bank Share Price",
    "Infosys Share Price",
    "SBI Share Price",
    "Reliance shares",
    "Stock Market LIVE",
  ]


  const topSections = [
    [
      "Latest News",
      "Company News",
      "Market News",
      "India News",
      "Politics News",
      "Cricket News",
      "Personal Finance",
      "Technology News",
      "World News",
    ],
    ["Industry News", "Education News", "Opinion", "Shows", "Economy News", "Lifestyle News", "Health News"],
    [
      "Today's Paper",
      "About Us",
      "T&C",
      "Privacy Policy",
      "Cookie Policy",
      "Disclaimer",
      "Investor Communication",
      "GST registration number List",
      "Compliance",
    ],
    ["Contact Us", "Advertise with Us", "Sitemap", "Subscribe", "Careers", "BS Apps"],
  ]


  const keyEvents = [
    "Stock Companies List",
    "Delhi election Results 2025 LIVE",
    "IPO News",
    "EMI Calculator Tool",
    "Delhi Elections 2025",
    "Budget 2025",
    "Subscribe to Newsletters",
    "Free Sudoku Puzzle",
    "Free Crossword Puzzle",
    "Income Tax Calculator 2025-26",
  ]


  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "#", bg: "bg-[#3b5998]" },
    { icon: "WhatsApp", href: "#", bg: "bg-[#25D366]" }, // Custom WhatsApp icon needed
    { icon: "X", href: "#", bg: "bg-black"  }, // Custom X/Twitter icon needed
    { icon: <Linkedin className="h-4 w-4" />, href: "#", bg: "bg-[#0077b5]" },
    { icon: <Youtube className="h-4 w-4" />, href: "#", bg: "bg-[#ff0000]" },
    { icon: <Send className="h-4 w-4" />, href: "#", bg: "bg-[#0088cc]" },
    { icon: <Rss className="h-4 w-4" />, href: "#", bg: "bg-[#f26522]" },
  ]


  return (
    <footer className="bg-gray-50 pt-8 pb-4">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/image.svg"
            alt="Business Standard - 50 Years of Insight"
            width={400}
            height={80}
            className="h-20 w-auto"
          />
        </div>


        {/* Hot Stocks */}
        <div className="mb-8">
          <h2 className="text-sm font-bold mb-4">HOT STOCKS</h2>
          <div className="flex flex-wrap gap-2">
            {hotStocks.map((stock, index) => (
              <span key={index} className="inline-flex items-center">
                <Link href="#" className="text-sm hover:text-red-600">
                  {stock}
                </Link>
                {index < hotStocks.length - 1 && <Separator orientation="vertical" className="mx-2 h-4" />}
              </span>
            ))}
          </div>
        </div>


        {/* Top Sections */}
        <div className="mb-8">
          <h2 className="text-sm font-bold mb-4">TOP SECTIONS</h2>
          <div className="space-y-4">
            {topSections.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-2">
                {row.map((section, index) => (
                  <span key={index} className="inline-flex items-center">
                    <Link href="#" className="text-sm hover:text-red-600">
                      {section}
                    </Link>
                    {index < row.length - 1 && <Separator orientation="vertical" className="mx-2 h-4" />}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>


        {/* Key Events */}
        <div className="mb-8">
          <h2 className="text-sm font-bold mb-4">KEY EVENTS</h2>
          <div className="flex flex-wrap gap-2">
            {keyEvents.map((event, index) => (
              <span key={index} className="inline-flex items-center">
                <Link href="#" className="text-sm hover:text-red-600">
                  {event}
                </Link>
                {index < keyEvents.length - 1 && <Separator orientation="vertical" className="mx-2 h-4" />}
              </span>
            ))}
          </div>
        </div>


        {/* Copyright and Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t">
          <p className="text-sm text-gray-600">Copyrights © 2025 Business Standard Private Ltd. All rights reserved</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className={`${social.bg} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}





