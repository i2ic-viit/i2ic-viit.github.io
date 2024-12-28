import { type ReactNode } from "react";
import { Percent, Gift, Tag } from "lucide-react";

interface Notification {
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
        icon: <Percent className="h-6 w-6 text-destructive" />,
        title: "New feature released",
        description: "Check out our latest updates and improvements",
        time: "2 minutes ago",
    },
    {
        id: 2,
        icon: <Gift className="h-6 w-6 text-destructive" />,
        title: "System maintenance",
        description: "Scheduled maintenance window starts in 1 hour",
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
