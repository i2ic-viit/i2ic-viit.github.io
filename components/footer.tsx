import Link from "next/link";
import Logo from "@/components/logo";
import { socialLinks, navigationLinks } from "@/data/navigation";

export function Footer() {
    return (
        <footer className="w-full py-12 flex flex-col bg-secondary items-center gap-8">
            <Link href="/" className="text-2xl flex font-semibold">
                <Logo height={64}/>
            </Link>

            <nav className="hidden md:flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {navigationLinks.map((link) => (
                    <Link
                        key={link.text}
                        href={link.href}
                        className="hover:text-foreground transition-colors"
                    >
                        {link.text}
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
