"use client"


import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Play, ChevronRight } from "lucide-react"



export default function ForthComponent() {
  const popularNews = [
    {
      title: "Rajesh Bhushan of Angel One recommends buying these stocks on Monday",
      time: "2 min read",
    },
    {
      title: "IT companies likely to roll out 3-6% hikes this year, say HR experts",
      time: "4 min read",
      isPremium: true,
    },
    {
      title: "Delhi CM swearing-in ceremony likely after PM Modi's return from UAE visit",
      time: "4 min read",
    },
  ]


  const defenceNews = [
    {
      title: "Ex-Wipro leader: Army conducts joint airborne ops training with Air Force",
      time: "2 min read",
    },
    {
      title: "Security forces recover 35 weapons, apprehend 3 cadres in Manipur",
      time: "3 min read",
      image: "/image.svg",
      hasNewStories: true,
      newStoriesCount: 2,

    },
    {
      title: "India-France trade rose to $20 bn: Chambers of Commerce and Industry Prez",
      time: "3 min read",
    },
  ]


  const multimediaNews = [
    {
      title: "Delhi elections result: Why did voters choose BJP?",
      image: "/image.svg",
      duration: "3:45",
    },

    {
      title: "Delhi election results out: BJP makes a comeback after 27 years",
      image: "/image.svg",
      duration: "4:20",
    },

    {
      title: "Watch: BJP's Parvesh Verma celebrates victory after defeating Kejriwal",
      image: "/image.svg",
      duration: "2:15",
    },

  ]


  const opinionArticles = [
    {
      title: "After BJP's repo rate cut: The global environment will pose risks",
      author: "Business Standard Editorial Comment",
      authorImage: "/image.svg",
      time: "5 min read",
      isPremium: true,

    },
    {
      title: "Delhi's next act: BJP should focus on improving governance in the city",
      author: "Rohini Kapoor",
      authorImage: "/image.svg",
      time: "4 min read",
      isPremium: true,

    },
    {
      title: "DeepSeek versus ChatGPT: Is another tech revolution on the horizon?",
      author: "AK Balakrishnan",
      authorImage: "/image.svg",
      time: "6 min read",
      isPremium: true,

    },
    {
      title: "Which road to Viksit Bharat? Charting India's path to development by 2047",
      author: "Debashish Basu",
      authorImage: "/image.svg",
      time: "4 min read",
      isPremium: true,

    },
  ]


  return (
    <div className="container mx-auto px-4 py-6">
      {/* Popular Now Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Popular Now</h2>
          <Button variant="ghost" size="sm">
            more
          </Button>
        </div>
        <div className="space-y-4">
          {popularNews.map((news, index) => (
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


      {/* External Affairs Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">External Affairs, Defence and Security</h2>
          <Button variant="ghost" size="sm">
            more
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {defenceNews.slice(0, 2).map((news, index) => (
              <Card key={index} className="border-0 shadow-none">
                <CardContent className="p-3">
                  <div className="flex items-start gap-2">
                    <h3 className="text-base font-medium flex-1">{news.title}</h3>
                    <span className="text-xs text-gray-500">{news.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {defenceNews[1].image && (
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src={defenceNews[1].image || "/image.svg"}
                alt={defenceNews[1].title}
                fill
                className="object-cover"

              />
              {defenceNews[1].hasNewStories && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {defenceNews[1].newStoriesCount} New stories
                  <ChevronRight className="h-4 w-4" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>


      {/* Multimedia Section */}
      <section className="mb-8 bg-orange-50 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Multimedia</h2>
          <Button variant="ghost" size="sm">
            more
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {multimediaNews.map((news, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative aspect-video">
                <Image
                  src={news.image || "/image.svg"}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="h-6 w-6 text-gray-900" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium line-clamp-2">{news.title}</h3>
                  <span className="text-xs text-white/80 mt-1">{news.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* Opinion Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Opinion</h2>
          <Button variant="ghost" size="sm">
            more
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opinionArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src={article.authorImage} alt={article.author} />
                    <AvatarFallback>{article.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{article.author}</p>
                  </div>
                </div>
                <h3 className="font-medium line-clamp-3 mb-2">{article.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{article.time}</span>
                  {article.isPremium && <span className="text-xs text-red-600 font-medium">Premium</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}





