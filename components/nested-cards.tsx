import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function Component() {
  const childCards = [
    {
      title: "SHADOW OF THE CAT",
      image: "https://warathepj.github.io/html-game-id/cat1.jpg",
      link: "/blog/sc"
    },
    {
      title: "LAST STAND CORGI",
      image: "https://warathepj.github.io/html-game-id/corgi1.jpg",
      link: "/blog/ls"
    },
    {
      title: "Card 3",
      image: "/placeholder.svg?height=100&width=200",
      link: "/page3"
    }
  ]

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-4">บทความเกี่ยวกับเกมส์</CardTitle>
        <div className="space-y-4">
          {childCards.map((card, index) => (
            <Link key={index} href={card.link} passHref>
              <Card className="transition-colors duration-200 hover:bg-primary hover:text-primary-foreground">
                <CardContent className="p-4 flex items-center space-x-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={100}
                    height={50}
                    className="rounded-md"
                  />
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}