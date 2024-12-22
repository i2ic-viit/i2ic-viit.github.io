"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import logo from "../public/i2ic-logo.png";

const navigationLinks = [
  { text: "About Us", href: "/about" },
  { text: "Events", href: "/events" },
  { text: "Placement", href: "/placement" },
  { text: "Upcoming Drives", href: "/upcoming-drives" },
];

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="mr-4 flex items-center font-bold">
          <Image src={logo} alt="Logo" className="mr-2" width={48} height={48} priority/>
          I2IC
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild className="ml-auto">
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs sm:w-64">
              <SheetHeader>
                <SheetTitle>I2IC</SheetTitle>
                <SheetDescription className="">
                  <Image src={logo} alt="Logo" className="mx-auto" width={60} height={60} />
                  Navigate through the site.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="ml-auto flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:underline"
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
