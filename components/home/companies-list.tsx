'use client';

import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Accenture', logo: '/companies/amazon.svg' }, 
  { name: 'Atlas Copco', logo: '/companies/atlas-copco.svg' },
  { name: 'BMW', logo: '/companies/bmw.svg' },
  { name: 'Oracle', logo: '/companies/accenture.svg' },
  { name: 'forbes Marshal', logo: '/companies/forbes.svg' },
  { name: 'Mercedes-Benz', logo: '/companies/mercedes-benz.svg' },
  { name: 'IBM', logo: '/companies/ibm.svg' },
  { name: 'Microsoft', logo: '/companies/microsoft.svg' },
  { name: 'mastercard', logo: '/companies/mastercard.svg' },
  { name: 'Oracle', logo: '/companies/oracle.svg' },

];

export default function InfiniteLogoSlider() {
  return (
    <div className="text-center py-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">Our Recruiters</h2>

      {/* Logo Slider */}
      <div className="relative flex overflow-hidden">
        {/* First Animation Layer */}
        <div className="flex animate-marquee whitespace-nowrap">
          {companies.map((company) => (
            <div
              key={company.name}
              className="mx-4 transition-transform transform hover:scale-110"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={250}
                height={200}
                className="max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
        {/* Second Animation Layer */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {companies.map((company) => (
            <div
              key={company.name}
              className="mx-4 transition-transform transform hover:scale-110"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={250}
                height={200}
                className="max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
