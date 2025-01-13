"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { notifications } from "@/data/notifications";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NotificationSnackbar() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [count, setCount] = useState(0);
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrentSlide(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrentSlide(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="sticky bottom-0 py-4 z-30">
            <Card className="border bg-destructive backdrop-blur supports-[backdrop-filter]:bg-destructive-foreground w-[min(calc(640px-32px),calc(100%-32px))] max-w-screen-sm mx-auto flex">
                <Carousel
                    plugins={[plugin.current]}
                    setApi={setApi}
                    className="w-[calc(100%-60px)]"
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {notifications.map((notification) => (
                            <CarouselItem key={notification.id}>
                                <div className="p-4 flex items-start gap-3">
                                    <div className="shrink-0 h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                                        {notification.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        {notification?.href ? (
                                            <Button
                                                className="text-sm font-semibold text-destructive leading-none tracking-tight px-0"
                                                variant="link"
                                                asChild
                                            >
                                                <Link href={notification.href}>
                                                    {notification.title}{" "}
                                                    <ArrowUpRight className="inline size-4" />
                                                </Link>
                                            </Button>
                                        ) : (
                                            <h3 className="text-sm font-semibold text-destructive leading-none tracking-tight py-2">
                                                {notification.title}
                                            </h3>
                                        )}
                                        <p className="text-sm text-muted-foreground mt-1 max-w-full">
                                            {notification.description}
                                        </p>
                                        <p className="text-xs text-muted-foreground/60 mt-1">
                                            {notification.time}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {count > 1 && (
                    <div className="p-4 flex flex-col ">
                        <div className="text-primary text-center font-semibold">
                            <button
                                className="text-primary"
                                onClick={() =>
                                    api?.scrollTo(currentSlide + (1 % count))
                                }
                            >
                                <ChevronRight className="size-6" />
                            </button>
                        </div>
                        <div className="text-primary text-center font-semibold">
                            {currentSlide + 1}/{count}
                        </div>
                        <div className="w-full flex items-center justify-center gap-1">
                            {notifications.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                        index === currentSlide
                                            ? "bg-primary w-3"
                                            : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
}
