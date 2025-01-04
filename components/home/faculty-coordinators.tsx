import { Quote } from 'lucide-react'
import { faculty } from '@/data/commitee'
import Image from 'next/image'

export default function FacultyCoordinators() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">Faculty Coordinators</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {faculty.map((coordinator, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col items-center text-center p-6 md:p-8 lg:p-10 relative
                ${index >= 2 ? 'border-t-2 border-muted-foreground/20' : ''}
                ${index % 2 === 1 ? 'md:border-l-2 md:border-muted-foreground/20' : ''}
              `}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image
                  src={coordinator.imageSrc}
                  alt={coordinator.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{coordinator.name}</h3>
              <p className="text-muted-foreground mb-6">{coordinator.role}</p>
              
              <div className="relative w-full">
                <Quote className="absolute -left-4 top-0 w-8 h-8 text-primary opacity-50 rotate-180" />
                <p className="italic text-muted-foreground px-8">
                  {coordinator.quote}
                </p>
                <Quote className="absolute -right-4 bottom-0 w-8 h-8 text-primary opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
