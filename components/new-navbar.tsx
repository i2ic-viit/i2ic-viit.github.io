"use client";
import React from "react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import Logo from "./logo";
import { navigationLinks } from "@/data/navigation";

const Navbar = () => {
    const isMobile = useIsMobile();

    return (
        <div className="border-b bg-secondary sticky top-0 z-40">
            <div className="flex h-16 items-center px-4">
                <Link
                    href="/"
                    className="mr-4 font-noto-sans font-bold text-2xl lg:text-3xl"
                >
                    <Logo />
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
                                <SheetTitle className="font-noto-sans">
                                    <Link
                                        href="/"
                                        className="flex flex-col items-center sm:items-start gap-2"
                                    >
                                        <Logo />
                                        <span>I2IC</span>
                                    </Link>
                                </SheetTitle>
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
                                        <SheetClose asChild>
                                            <Link
                                                href={link.href}
                                                className="text-sm font-medium text-muted-foreground px-4 py-2"
                                            >
                                                <span className="relative group">
                                                    {link.text}
                                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300"/>
                                                </span>
                                            </Link>
                                        </SheetClose>
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
                                    className="relative text-sm font-medium text-muted-foreground group px-4 py-2"
                                >
                                    {link.text}
                                    <span className="absolute left-4 bottom-2 w-0 h-px bg-foreground group-hover:w-[calc(100%-2rem)] transition-all duration-300" />
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
