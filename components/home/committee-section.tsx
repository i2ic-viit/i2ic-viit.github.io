import ProfileCard from "@/components/about-us/profile-card"
import { Button } from "@/components/ui/button"
import { committeeMembers } from "@/data/commitee"
import { ArrowUpRight } from "lucide-react"

export default function CommitteeSection() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">Committee</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {committeeMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
              <ProfileCard {...member} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View the Full Committee <ArrowUpRight className="size-4"/>
          </Button>
        </div>
      </div>
    </section>
  )
}
