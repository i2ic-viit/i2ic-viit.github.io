import Link from "next/link";
import Image from "next/image";
import { Globe, Github, Instagram, AtSign } from "lucide-react";
import { cn } from "@/lib/utils";

import i2icLogo from "@/public/i2ic-logo.png";
import viLogo from "@/public/vi-logo.png";

const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/events", label: "Events" },
    { href: "/placement", label: "Placement" },
    { href: "/upcomming-drive", label: "Upcomming Drives" },
];

const socialLinks = [
    { href: "/", icon: Globe, label: "Website" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "mailto:i2ic.tpo@gmail.com", icon: AtSign, label: "Email" },
];

export function Footer() {
    return (
        <footer className="w-full py-12 flex flex-col bg-secondary items-center gap-8">
            <Link href="/" className="text-2xl flex font-semibold">
                <Image
                    src={viLogo}
                    alt="Logo"
                    className="mr-2"
                    width={64}
                    height={96}
                    priority
                />
                <Image
                    src={i2icLogo}
                    alt="Logo"
                    className="mr-2"
                    width={96}
                    height={96}
                    priority
                />
            </Link>

            <nav className="hidden md:flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {footerLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="hover:text-foreground transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="flex gap-4">
                {socialLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.label}</span>
                    </Link>
                ))}
            </div>

            <div className="text-sm text-muted-foreground">© 2025 I2IC.</div>
        </footer>
    );
}
