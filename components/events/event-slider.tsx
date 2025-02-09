import React, { useState } from "react";
import Calendar from "./calendar";
import { I2ICEvent } from "@/data/events";
import { isSameDay } from "date-fns";
import Image from "next/image";
import { useCallback } from "react";
import { useEffect } from "react";

const EventSlider = ({ events }: { events: I2ICEvent[] }) => {
    const sortedEvents = events.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    const nextEventIndex = sortedEvents.findIndex(
        (event) => new Date(event.date) > new Date()
    );
    const [attendaceButton, setAttendanceButton] = useState(false);
    interface userLocation {
        latitude: number;
        longitude: number;
        altitude: number | null;
    }

    const [userLocation, setUserLocation] = useState<userLocation | null>(null);
    const [eventDate, setEventDate] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(
        nextEventIndex !== -1 ? nextEventIndex : 0
    );
    const [showDetails, setShowDetails] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : sortedEvents.length - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < sortedEvents.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handleDateClick = (date: Date) => {
        const eventIndex = sortedEvents.findIndex((event) =>
            isSameDay(new Date(event.date), date)
        );
        if (eventIndex !== -1) {
            setCurrentIndex(eventIndex);
        }
    };

    const currentEvent = sortedEvents[currentIndex];
    const nextEvent = sortedEvents
        .filter((sortedEvents) => new Date(sortedEvents.date) > new Date())
        .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )[0];

    const truncateText = (text: string, length: number) => {
        return text.length > length ? `${text.substring(0, length)}...` : text;
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude, altitude } = position.coords;
                    setUserLocation({ latitude, longitude, altitude });
                    console.log("User location fetched:", {
                        latitude,
                        longitude,
                        altitude,
                    });
                },
                (error) => {
                    console.error("Error getting location:", error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    const checkLocation = useCallback(() => {
        if (userLocation) {
            const targetLocation = {
                latitude: 18.5204303,
                longitude: 73.8567437,
                altitude: 30,
                tolerance: 0.0001,
            };
            const { latitude, longitude } = userLocation;
            const isAtTarget =
                Math.abs(latitude - targetLocation.latitude) <
                    targetLocation.tolerance &&
                Math.abs(longitude - targetLocation.longitude) <
                    targetLocation.tolerance;

            setAttendanceButton(isAtTarget);
            console.log(
                `Location check: isAtTarget=${isAtTarget}`,
                `User Location: ${JSON.stringify(userLocation)}`,
                `Target Location: ${JSON.stringify(targetLocation)}`
            );
        }
    }, [userLocation]);

    const isToday = (dateStr: string | null) => {
        if (!dateStr) return false;
        const today = new Date();
        const dateObject = new Date(dateStr);
        return (
            dateObject.getDate() === today.getDate() &&
            dateObject.getMonth() === today.getMonth() &&
            dateObject.getFullYear() === today.getFullYear()
        );
    };
    useEffect(() => {
        if (userLocation) {
            checkLocation();
        }
    }, [userLocation, checkLocation]);

    useEffect(() => {
        if (isToday(eventDate)) {
            getUserLocation();
        }
    }, [eventDate]);

    return (
        <div className="flex flex-col md:flex-row items-start p-5 gap-5">
            <div className="flex-8 max-w-full md:max-w-3/4 relative">
                {sortedEvents.map((event, index) => {
                    const isNextEvent =
                        nextEvent &&
                        new Date(event.date).getTime() ===
                            new Date(nextEvent.date).getTime();
                    const isUpcomingEvent =
                        new Date(event.date) > new Date() && !isNextEvent;

                    return (
                        <div
                            key={event.id}
                            className={`${
                                index === currentIndex ? "block" : "hidden"
                            } 
        transition-all duration-500 bg-cover bg-center p-5 rounded-lg shadow-lg h-[400px]`}
                            style={{
                                backgroundImage: `url(${event.backgroundImage})`,
                            }}
                        >
                            {isNextEvent && (
                                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                                    Next Event
                                </div>
                            )}
                            {isUpcomingEvent && (
                                <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                                    Upcoming Event
                                </div>
                            )}
                            <div className="bg-black/50 text-white rounded-lg p-4 flex flex-col justify-between h-full">
                                <h2 className="text-2xl mb-2">{event.title}</h2>
                                <p className="text-sm mb-2 md:hidden text-justify">
                                    {truncateText(event.description, 100)}
                                    {event.description.length > 100 && (
                                        <span
                                            className="text-blue-400 cursor-pointer"
                                            onClick={() => setShowDetails(true)}
                                        >
                                            {" Show More"}
                                        </span>
                                    )}
                                </p>
                                <p className="text-sm mb-2 hidden md:block text-justify">
                                    {event.description}
                                </p>
                                <button
                                    onClick={() => {
                                        setShowDetails(true);
                                        setEventDate(event?.date.toString());
                                    }}
                                    className="mt-auto bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    );
                })}

                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
                >
                    &#10094;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
                >
                    &#10095;
                </button>
            </div>

            <div className="flex-2 md:max-w-1/4 bg-gray-100 rounded-lg p-3 hidden md:block">
                <h2 className="mb-4 text-center text-xl">Upcoming Events</h2>
                <Calendar events={sortedEvents} onDateClick={handleDateClick} />
            </div>

            {showDetails && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50"
                    onClick={() => setShowDetails(false)}
                >
                    <div
                        className="w-4/5 max-w-3xl bg-white rounded-lg p-5 shadow-lg relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowDetails(false)}
                            className="absolute top-3 right-3 text-2xl text-gray-700"
                        >
                            &times;
                        </button>

                        <div className="relative w-full h-[300px]">
                            <Image
                                src={currentEvent.imageUrl}
                                alt={currentEvent.title}
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-t-lg mb-5"
                            />
                        </div>

                        <h2 className="text-2xl mb-3">{currentEvent.title}</h2>
                        <p className="text-sm mb-5 max-h-48 overflow-auto">
                            {currentEvent.description}
                        </p>
                        {new Date(currentEvent.date) > new Date() ? (
                            <a
                                href={currentEvent.link}
                                rel="noopener noreferrer"
                            >
                                <button className="px-5 py-2 bg-primary text-white rounded">
                                    Register Now
                                </button>
                            </a>
                        ) : attendaceButton ? (
                            <a
                                href={currentEvent.link}
                                rel="noopener noreferrer"
                            >
                                <button className="px-5 py-2 bg-primary text-white rounded">
                                    Mark Attendance
                                </button>
                            </a>
                        ) : (
                            <button
                                disabled
                                className="px-5 py-2 bg-gray-300 text-white rounded cursor-not-allowed"
                            >
                                Event Passed
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventSlider;
