import { type ReactNode } from "react";
import { Gift, Tag, Users } from "lucide-react";

export interface Notification {
    id: string | number;
    icon: ReactNode; 
    title: string;
    description: string;
    time: string;
    href?: string;
}

export const notifications: Notification[] = [
    {
        id: 1,
        icon: <Users className="h-6 w-6 text-destructive" />,
        title: "New Comittee",
        href: "/about-us", 
        description: "Check out our new comittee",
        time: "12:00 Dec 29, 2024",
    },
    {
        id: 2,
        icon: <Gift className="h-6 w-6 text-destructive" />,
        title: "Rewards",
        description: "score high, and win by participating in our events",
        time: "23:00 Oct 12, 2024",
    },
    {
        id: 3,
        icon: <Tag className="size-6 text-destructive" />,
        title: "New Event",
        description: "new saturday club this saturday, dont forget to register",
        time: "12:00 Dec 28, 2024",
        href: "/saturday",
    }
];
