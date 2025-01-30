import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { type I2ICEvent } from "@/data/events"

export function EventCard({ event }: { event: I2ICEvent }) {
  return (
    <Card className="overflow-hidden bg-white hover:shadow-lg transition-shadow max-w-sm mx-auto">
      <div className="relative aspect-[3/2] overflow-hidden p-3">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image src={event.imageUrl || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{event.title}</h3>
          <span className="text-sm text-muted-foreground">{event.date}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-1">{event.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href="#" className="text-sm font-medium flex items-center hover:text-primary transition-colors group">
          <span className="group-hover:underline">Learn More</span>
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
