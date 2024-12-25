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

import i2icLogo from "@/public/i2ic-logo.png";
import viLogo from "@/public/vi-logo.png";

const navigationLinks = [
    { text: "About Us", href: "/about" },
    { text: "Events", href: "/events" },
    { text: "Placement", href: "/placement" },
    { text: "Upcoming Drives", href: "/upcoming-drives", important: true },
];

const Navbar = () => {
    const isMobile = useIsMobile();

    return (
        <div className="border-b bg-background/60 sticky top-0 backdrop-blur-md">
            <div className="flex h-16 items-center px-4">
                <Link
                    href="/"
                    className="mr-4 flex items-center font-noto-sans font-bold text-2xl lg:text-3xl"
                >
                    <Image
                        src={viLogo}
                        alt="Logo"
                        className="mr-2"
                        width={32}
                        height={48}
                        priority
                    />
                    <Image
                        src={i2icLogo}
                        alt="Logo"
                        className="mr-2"
                        width={48}
                        height={48}
                        priority
                    />
                    I2IC
                </Link>
                {isMobile ? (
                    <Sheet>
                        <SheetTrigger asChild className="ml-auto">
                            <Button variant="ghost" size="sm">
                                <Menu className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="w-full max-w-xs sm:w-64"
                        >
                            <SheetHeader>
                                <SheetTitle>I2IC</SheetTitle>
                                <SheetDescription className="">
                                    Navigate through the site.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-1 py-4">
                                {navigationLinks.map((link) => (
                                    <Button
                                        variant={
                                            link?.important
                                                ? "default"
                                                : "ghost"
                                        }
                                        key={link.href}
                                        asChild
                                    >
                                        <Link
                                            href={link.href}
                                            className="px-4 py-2 text-sm font-medium rounded-md"
                                        >
                                            {link.text}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <div className="ml-auto flex items-center space-x-2">
                        {navigationLinks.map((link) => (
                            <Button
                                variant={link?.important ? "default" : "ghost"}
                                key={link.href}
                                asChild
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium hover:underline"
                                >
                                    {link.text}
                                </Link>
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
