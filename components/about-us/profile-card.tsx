import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"



interface ProfileCardProps {
  name: string
  role: string
  imageUrl: string
  linkedinUrl: string
}

export default function ProfileCard({ 
  name,
  role,
  imageUrl,
  linkedinUrl
}: ProfileCardProps) {
  return (
    <Card className="w-[300px] bg-card border-border">
      <CardContent className="p-0">
        <div className="aspect-[4/5] relative overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1.5 p-4">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
          <Link 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-foreground hover:text-foreground/80"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn profile</span>
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
