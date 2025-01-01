import React, { useState } from "react";
import Calendar from "./calendar";
import { Event } from "@/data/events";
import { isSameDay } from "date-fns";
import Image from "next/image";

const EventSlider = ({ events }: { events: Event[] }) => {
  const nextEventIndex = events.findIndex(
    (event) => new Date(event.date) > new Date()
  );

  const [currentIndex, setCurrentIndex] = useState(
    nextEventIndex !== -1 ? nextEventIndex : 0
  );
  const [showDetails, setShowDetails] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : events.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < events.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleDateClick = (date: Date) => {
    const eventIndex = events.findIndex((event) =>
      isSameDay(event.date, date)
    );
    if (eventIndex !== -1) {
      setCurrentIndex(eventIndex);
    }
  };

  const currentEvent = events[currentIndex];
  const nextEvent = events
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  const truncateText = (text: string, length: number) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-5 gap-5">
      <div className="flex-8 max-w-full md:max-w-3/4 relative">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`${index === currentIndex ? "block" : "hidden"
              } transition-all duration-500 bg-cover bg-center p-5 rounded-lg shadow-lg h-[400px]`}
            style={{ backgroundImage: `url(${event.backgroundImage})` }}
          >
            {nextEvent &&
              new Date(event.date).toISOString() === nextEvent.date.toISOString() && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  Next Event
                </div>
              )}
            <div className="bg-black/50 text-white rounded-lg p-4 flex flex-col justify-between h-full">
              <h2 className="text-2xl mb-2">{event.title}</h2>

              <p className="text-sm mb-2 md:hidden">
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
              <p className="text-sm mb-2 hidden md:block">
                {event.description}
              </p>
              <button
                onClick={() => setShowDetails(true)}
                className="mt-auto bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}

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
        <Calendar events={events} onDateClick={handleDateClick} />
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
            {/* <img
              src={currentEvent.backgroundImage}
              alt={currentEvent.title}
              fill
              className="w-full h-[300px] object-cover rounded-t-lg mb-5"
            /> } */}
            <div className="relative w-full h-[300px]">
              <Image
                src={currentEvent.backgroundImage}
                alt={currentEvent.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg mb-5"
              />
            </div>

            <h2 className="text-2xl mb-3">{currentEvent.title}</h2>
            <p className="text-sm mb-5 max-h-48 overflow-auto">
              {currentEvent.description}
            </p>
            {new Date(currentEvent.date) > new Date() ? (
              <button className="px-5 py-2 bg-primary text-white rounded">
                Register Now
              </button>
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
