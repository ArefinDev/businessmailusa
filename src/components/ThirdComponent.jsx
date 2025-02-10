"use client"


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"


export default function ThirdComponent() {
  const webStories = [
    {
      title: "BS EDIT: Does India's Campaign Silence Period Need a Rethink?",
      image: "/image.svg",
    },

    {
      title: "BS EDIT: US Deports Illegal Indian Immigrants: Key Takeaways",
      image: "/image.svg",
    },

    {
      title: "BS EDIT: Trump's Gaza Plan: A Dangerous Gamble",
      image: "/image.svg",
      hasNewStories: true,
      newStoriesCount: 2,
    },

    {
      title: "BS EDIT: RBI's Monetary Policy Dilemma: Growth vs Inflation",
      image: "/image.svg",
    },

  ]


  const exploreTopics = [
    "Winner List of Delhi Election",
    "Delhi Election Results 2025 LIVE",
    "Arvind Kejriwal Loses New Delhi Seat",
    "New Delhi Assembly Results 2025",
    "Income Tax Calculator 2025-26",
    "Rohini Assembly results 2025",
    "Kalkaji Assembly Results 2025",
    "Arvind Kejriwal Concedes Defeat in Delhi Polls",
    "Delhi Elections Key Constituencies",
    "Delhi Election 2025",
  ]


  const newsColumns = [
    {
      title: "Markets",
      items: [
        {
          title: "Ajax Engineering IPO opens today; GMP up 8%; should you park your money?",
        },
        {
          title: "BHEL share price rises over 3% on multiple orders; check details here",
        },
      ],
    },
    {
      title: "Cricket",
      items: [
        {
          title: "NZ vs SA LIVE SCORE, ODI Tri-series 2025: NZ wins toss, elects to bowl in Lahore",
        },
        {
          title: "IND vs ENG: Rohit Sharma back to his best, hits 32nd ODI hundred in Cuttack",
        },
      ],
    },
    {
      title: "India News",
      items: [
        {
          title: "Punjab Police busts terror module near Amritsar airport, 3 arrested",
        },
        {
          title: "LIVE news updates: Chiefs of 3 dairies arrested in connection with Tirupati laddoo case",
        },
      ],
    },
    {
      title: "Your Money",
      items: [
        {
          title: "US deported 15,756 illegal immigrants in 15 years: What data reveals",
        },
        {
          title: "Indians receive 72.3% of all H1B visas issued by US for 2022-2023: Govt",
        },
      ],
    },
  ]


  return (
    <div className="container mx-auto px-4 py-6">
      {/* Web Stories Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Web Stories</h2>
        <Button variant="ghost" size="sm">
          more
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {webStories.map((story, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer">
            <div className="relative aspect-[4/3]">
              <Image
                src={story.image || "/image.svg"}
                alt={story.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"

              />
              {story.hasNewStories && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {story.newStoriesCount} New stories
                  <ChevronRight className="h-4 w-4" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium line-clamp-3">{story.title}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>


      {/* Explore News Section */}
      <div className="bg-orange-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Explore News</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {exploreTopics.map((topic, index) => (
            <Badge key={index} variant="secondary" className="bg-white hover:bg-gray-100 cursor-pointer">
              {topic}
            </Badge>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsColumns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">{column.title}</h3>
                <Button variant="ghost" size="sm">
                  more
                </Button>
              </div>
              <div className="space-y-4">
                {column.items.map((item, itemIndex) => (
                  <Link key={itemIndex} href="#" className="block text-sm hover:text-red-600">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





