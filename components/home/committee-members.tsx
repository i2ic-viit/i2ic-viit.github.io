'use client'

import { Linkedin, ArrowUpRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { committeeMembers } from '@/data/commitee'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function CommitteeSection() {
  return (
    <section className="bg-secondary">
        <div className="text-center mb-10 pt-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Committee</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto py-16 px-4">
        {committeeMembers.map((member, index) => (
          <Card key={index} className="relative overflow-hidden border-none shadow-none bg-secondary">
            <div className="flex flex-col items-center p-6">
              {/* Member Image */}
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="rounded-full w-full h-full object-cover"
                />
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                )}
              </div>
              
              {/* Member Details */}
              <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </div>
            
            {/* Divider Lines */}
            {index % 3 !== 2 && index < committeeMembers.length - 1 && (
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 hidden lg:block h-full" />
            )}
            {index < committeeMembers.length - 3 && (
              <div className="absolute left-0 right-0 bottom-0 h-px w-full bg-gray-200" />
            )}
          </Card>
        ))}
      </div>
      <div className="text-center py-8">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View the Full Committee <ArrowUpRight className="size-4"/>
          </Button>
        </div>
    </section>
  )
}

