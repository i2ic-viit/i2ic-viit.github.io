import { Globe, Instagram, AtSign, Linkedin } from "lucide-react";

export interface NavigationLink 
{
    text: string;
    href: string;
    important?: boolean;
}

const navigationLinks: NavigationLink[] = [
    { text: "About Us", href: "/about" },
    { text: "Events", href: "/events" },
    // { text: "Contact", href: "/contact-us" },
    { text: "Placement", href: "/placement" },
    { text: "Upcoming Drives", href: "/upcoming-drives" },
];

const socialLinks = [
    { href: "/", icon: Globe, label: "Website" },
    { href: "https://www.linkedin.com/company/i2ic", icon: Linkedin, label: "Linkedin" },
    { href: "https://www.instagram.com/i2ic.tpo.viit/", icon: Instagram, label: "Instagram" },
    { href: "mailto:i2ic.tpo@gmail.com", icon: AtSign, label: "Email" },
];

export {
    socialLinks,
    navigationLinks
}
