import Image from 'next/image'
import Logo from '@/components/logo'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          {/* <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Logo height={224} i2ic />
          </div> */}
          
          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
              Industry Institute Interaction Council
            </h1>
            <h2 className="text-sm md:text-2xl lg:text-3xl text-primary">
              Training And Placement Cell VIT-Kondhwa
            </h2>
          </div>

          {/* Placeholder Image */}
          <div className="w-full max-w-5xl mt-8">
            <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Hero Image"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

