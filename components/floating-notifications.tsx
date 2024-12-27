"use client";

import { useRef, useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { notifications } from "@/data/notifications";

export function FloatingNotifications() {
    const [isExpanded, setIsExpanded] = useState(true);
    const notificationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node)
            ) {
                setIsExpanded(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={notificationRef}
            className={cn(
                "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",
                isExpanded ? "w-full max-w-96 pl-8" : "w-auto"
            )}
        >
            {isExpanded ? (
                <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                        <Bell className="mr-2 h-4 w-4" />
                        <CardTitle className="text-base">
                            Latest Updates
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        {notifications.map((notification) => (
                            <div key={notification.id} className="grid gap-1">
                                <div className="text-sm font-medium">
                                    {notification.title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {notification.description}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {notification.time}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            ) : (
                <Button
                    variant="default"
                    size="icon"
                    className="size-12 rounded-full shadow-lg"
                    onClick={() => setIsExpanded(true)}
                >
                    <Bell className="size-6" />
                </Button>
            )}
        </div>
    );
}
