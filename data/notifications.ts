interface Notification {
    id: string | number; 
    title: string;
    description: string;
    time: string;
}

export const notifications: Notification[] = [
    {
        id: 1,
        title: "New feature released",
        description: "Check out our latest updates and improvements",
        time: "2 minutes ago",
    },
    {
        id: 2,
        title: "System maintenance",
        description: "Scheduled maintenance window starts in 1 hour",
        time: "23:00 Oct 12, 2024",
    },
];
