"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Search, User, Bell } from "lucide-react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function FirstComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width] = useWindowSize();

  const stockData = [
    {
      name: "Sensex",
      value: "77522.74",
      change: "-337.45",
      percent: "-0.43%",
      color: "red",
    },
    {
      name: "Nifty",
      value: "23429.10",
      change: "-130.85",
      percent: "-0.56%",
      color: "red",
    },
    {
      name: "Nifty Bank",
      value: "49955.05",
      change: "-203.60",
      percent: "-0.41%",
      color: "red",
    },
  ];

  const specialCoverage = [
    {
      title: "Donald Trump",
      image: "/image.svg",
      description: "Latest updates on former president",
    },
    {
      title: "Budget 2025",
      image: "/image.svg",
      description: "Complete coverage of Union Budget",

    },
    {
      title: "Deepseek AI",
      image: "/image.svg",
      description: "AI technology developments",
    },

    {
      title: "Delhi air quality",
      image: "/image.svg",
      description: "Air quality index and updates",
    },

    {
      title: "Global Markets",
      image: "/image.svg",
      description: "Trends in international markets",
    },

    {
      title: "Tech Innovations",
      image: "/image.svg",
      description: "Latest in technology and innovation",
    },

    {
      title: "Climate Change",
      image: "/image.svg",
      description: "Environmental news and policies",
    },

    {
      title: "Sports Highlights",
      image: "/image.svg",
      description: "Major sports events and results",
    },

  ];

  const getItemsPerPage = useCallback(() => {
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 4; // Desktop
  }, [width]);

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(specialCoverage.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Link href="/" className="flex-1 text-center">
              <h1 className="text-3xl font-serif text-red-700">
                Business Standard
              </h1>
              <p className="text-xs text-gray-600">
                Monday, February 10, 2025 | 10:35 AM IST
              </p>
            </Link>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto py-2">
            {[
              "Home",
              "Latest",
              "E-Paper",
              "Markets",
              "Budget 2025",
              "Opinion",
              "Delhi Elections",
              "India News",
              "Portfolio",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-red-700 whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Stock Ticker */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-6 overflow-x-auto">
            {stockData.map((stock) => (
              <div
                key={stock.name}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span className="text-sm font-medium">{stock.name}</span>
                <span className="text-sm">{stock.value}</span>
                <span className="text-xs text-red-600">{stock.change}</span>
                <span className="text-xs text-red-600">({stock.percent})</span>
              </div>
            ))}
            <Button variant="outline" size="sm" className="ml-auto">
              Heatmap
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <section>
          <h2 className="text-xl font-bold mb-4">Top News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Column with Large Image */}
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-4">
                  <div className="relative aspect-[4/3] mb-4">
                    <Image
                      src="/image.svg"
                      alt="IT Companies News"
                      fill
                      className="object-cover rounded-md"
                    />

                  </div>
                  <span className="text-xs text-red-600 font-medium">
                    Premium
                  </span>
                  <h3 className="text-lg font-bold mt-2">
                    IT companies likely to roll out 3-6% hikes this year, say HR
                    experts
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">4 min read</p>
                </CardContent>
              </Card>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <span className="text-xs text-red-600 font-medium">
                      Premium
                    </span>
                    <h3 className="text-base font-bold mt-2">
                      Banks will wait for next qtr to see if deposit rates can
                      be cut: G Setty
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">3 min read</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Third Column */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <span className="text-xs text-red-600 font-medium">
                      Premium
                    </span>
                    <h3 className="text-base font-bold mt-2">
                      Renewable energy projects of 40 GW fail to find buyers for
                      green power
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">4 min read</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Coverage Slider */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Special Coverage</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="grid transition-transform duration-500 ease-in-out"
                style={{
                  gridTemplateColumns: `repeat(${totalPages}, 100%)`,
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
                  >
                    {specialCoverage
                      .slice(
                        pageIndex * itemsPerPage,
                        (pageIndex + 1) * itemsPerPage
                      )
                      .map((item) => (
                        <Card key={item.title} className="overflow-hidden">
                          <div className="relative aspect-video">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Slide Indicators */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-red-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
