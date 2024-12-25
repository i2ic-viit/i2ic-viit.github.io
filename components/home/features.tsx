import { Users, Building2, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    title: "Mock Interview",
    description: "Students hone their skills and confidence through realistic practice sessions, preparing thoroughly for placement interviews with industry-standard scenarios.",
    icon: Users,
  },
  {
    title: "Industry Visit",
    description: "Providing members with valuable insights and networking opportunities to enrich their professional journey through direct exposure to workplace environments.",
    icon: Building2,
  },
  {
    title: "SkillSync",
    description: "Informative sessions to sharpen students' interview skills, offering valuable tips and strategies for success in every professional encounter and career milestone.",
    icon: Target,
  },
]

export default function FeaturesGrid() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold tracking-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
              {/* Add separator after each card except the last one in the row */}
              {index < features.length - 1 && (
                <>
                  {/* Vertical separator for larger screens */}
                  <div className="hidden lg:block absolute top-4 -right-5 h-[80%]">
                    <Separator orientation="vertical" />
                  </div>
                  {/* Horizontal separator for medium screens */}
                  <div className="hidden md:block lg:hidden">
                    <Separator className="my-8" />
                  </div>
                  {/* Horizontal separator for mobile */}
                  <div className="md:hidden">
                    <Separator className="my-6" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
