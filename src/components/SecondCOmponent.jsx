"use client"


import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight } from "lucide-react"


export default function SecondCOmponent() {
  const [spotlightIndex, setSpotlightIndex] = useState(0)
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)


  const latestNews = [
    {
      title: "PM Modi to meet Trump with planned tariff cuts to avoid risk of trade-war",
      time: "2 min read",
      isPremium: true,
    },
    {
      title: "Cess, surcharges, and shortfalls: The great Centre-state revenue tug of war",
      time: "3 min read",
      isPremium: true,
    },
    {
      title: "Finance ministry no to public sector banks taking haircut on MSME loans",
      time: "2 min read",
      isPremium: true,
    },
    {
      title: "TDS on FD, NPS Vatsalya, ULIP taxation: Tax changes to know post Budget",
      time: "2 min read",
      isPremium: false,
    },
  ]


  const spotlightNews = [
    {
      title: "Indians' deportation peaked during Donald Trump's first term",
      image:
        "/image.svg",
      time: "1 min read",
      isPremium: true,
    },
    {
      title: "Tata Sons' CSR money may go to Ratan Tata endowment trust, foundation",
      image:
        "/image.svg",
      time: "2 min read",
      isPremium: true,

    },
    {
      title: "Electoral battle won, BJP now has to deliver on promises in Delhi",
      image:
        "/image.svg",
      time: "2 min read",

      isPremium: true,
    },
  ]


  const headlines = [
    "Donald Trump's early presidency receives positive marks, shows CBS poll",
    "Trump plans to announce 25% tariffs on steel, aluminum imports today",
    "DeepSeek sparks hope for renaissance in China's technology megacaps",
  ]


  const getItemsPerSlide = useCallback(() => {
    if (width < 640) return 1 // Mobile
    if (width < 1024) return 2 // Tablet
    return 3 // Desktop
  }, [width])


  const itemsPerSlide = getItemsPerSlide()
  const totalSlides = Math.ceil(spotlightNews.length / itemsPerSlide)


  const nextSlide = () => {
    setSpotlightIndex((prev) => (prev + 1) % totalSlides)
  }


  const prevSlide = () => {
    setSpotlightIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }


  useEffect(() => {
    const spotlightTimer = setInterval(() => {
      nextSlide()
    }, 5000)


    const headlineTimer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length)
    }, 3000)


    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)


    return () => {
      clearInterval(spotlightTimer)
      clearInterval(headlineTimer)
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  return (
    <div className="container mx-auto px-4 py-6">
      {/* Latest News Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Latest News</h2>
          <Button variant="ghost" size="sm">
            more
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestNews.map((news, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="p-3">
                <div className="flex items-start gap-2">
                  <h3 className="text-base font-medium flex-1">{news.title}</h3>
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-xs text-gray-500">{news.time}</span>
                    {news.isPremium && <span className="text-xs text-red-600">Premium</span>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Spotlight and Poll Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Spotlight Slider */}
        <section className="flex-1">
          <h2 className="text-xl font-bold mb-4">Spotlight</h2>
          <div className="relative">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)`,
                }}
              >
                {spotlightNews
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((news, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[4/3]">
                        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold line-clamp-2 mb-2">{news.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{news.time}</span>
                          {news.isPremium && <span className="text-xs text-red-600 font-medium">Premium</span>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ))}


            {/* Slider Controls */}
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>


        {/* Poll Section */}
        <section className="w-full lg:w-80">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-bold mb-4">Poll</h2>
              <p className="text-sm mb-4">Will Trump's tariff policy put further pressure on the rupee?</p>
              <RadioGroup defaultValue="no" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
              <Button className="w-full mt-4">Submit</Button>
            </CardContent>
          </Card>
        </section>
      </div>


      {/* Headlines Slider */}
      <section className="mt-8 border-t pt-4">
        <div className="relative overflow-hidden h-8">
          <div
            className="absolute w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${headlineIndex * 100}%)` }}
          >
            {headlines.map((headline, index) => (
              <div key={index} className="h-8 flex items-center text-sm font-medium">
                {headline}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}





