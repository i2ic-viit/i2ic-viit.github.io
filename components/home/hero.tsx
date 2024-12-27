// import Image from "next/image";

// export default function HeroSection() {
//     const src = "/images/hero.png";

//     return (
//         <section className="h-[calc(100vh-64px)] bg-primary">
//             <div className="hidden md:block h-full">
//                 <div className="relative grid h-full grid-cols-2">
//                     <div className="relative z-10 flex items-center justify-end text-primary-foreground">
//                         <h1 className="text-right text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl pr-4">
//                             Empowering Students: <br />
//                             Connecting Education <br />
//                             with Industry for Success
//                         </h1>
//                     </div>

//                     <div className="absolute right-0 top-0 h-full w-[55%] overflow-hidden">
//                         <div className="relative h-full w-full">
//                             <Image
//                                 src={src}
//                                 alt="Students and Industry"
//                                 fill
//                                 className="object-cover"
//                                 priority
//                             />
//                             <div className="absolute inset-0 bg-black/50" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="relative h-full">
//                 <Image
//                     src={src}
//                     alt="Students and Industry"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//                 <div className="absolute inset-0 bg-black/50" />
//                 <div className="relative z-10 flex h-full items-center px-4">
//                     <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl text-center mx-auto">
//                         Empowering Students: <br />
//                         Connecting Education <br />
//                         with Industry for Success
//                     </h1>
//                 </div>
//             </div>
//         </section>
//     );
// }
'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bell, ArrowRight } from 'lucide-react'
import { notifications } from '@/data/notifications'

export default function HeroSection() {
  return (
    <div className="flex min-h-[70vh] h-[calc(100vh-64px)] flex-col items-center justify-center px-4 py-12 text-center md:px-6 lg:px-8">
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-300 bg-clip-text text-transparent">Empowering Students: </span> Connecting Education 
        with Industry for Success
      </h1>
      
      <div className="mt-8 max-w-2xl">
        <Card className="border-none bg-gradient-to-b from-white/50 to-white/80 shadow-lg backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-semibold">Latest Updates</h2>
              </div>
              <span className="text-sm text-muted-foreground">Now</span>
            </div>
            <div className="mt-4 space-y-4">
              {notifications.map((notification) => (
                <div key={`${notification.id}-notification`} className="flex flex-col gap-1 border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-medium text-destructive">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Button size="lg">
          Start your free trial
        </Button>
        <Button variant="link" className="text-base" asChild>
          <Link href="/pricing" className="flex items-center gap-2">
            Plans and pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}


