import React, { useState } from "react";
import {
    format,
    isToday,
    isSameDay,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
} from "date-fns";

type Event = {
    date: string; // Changed from Date to string
    description: string;
};

type CalendarProps = {
    events: Event[];
    onDateClick: (date: Date) => void;
};

const Calendar: React.FC<CalendarProps> = ({ events, onDateClick }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfWeek(endOfMonth(currentDate));
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    const getDayStyle = (day: Date) => {
        const eventOnThisDay = events.find((event) =>
            isSameDay(new Date(event.date), day)
        );
        const isPastEvent =
            eventOnThisDay && new Date(eventOnThisDay.date) < new Date();

        if (isToday(day)) {
            return { backgroundColor: "#3580be", color: "white" };
        }
        if (eventOnThisDay) {
            return isPastEvent
                ? { backgroundColor: "#ffe4b5", color: "gray" }
                : { backgroundColor: "#ffa500", color: "white" };
        }
        if (day < new Date()) {
            return { color: "gray" };
        }
        return {};
    };

    const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const handleDateClick = (day: Date) => {
        if (events.some((event) => isSameDay(new Date(event.date), day))) {
            onDateClick(day);
        }
    };

    return (
        <div
            style={{
                maxWidth: "300px",
                margin: "0 auto",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                }}
            >
                <button onClick={handlePreviousMonth}>&lt;</button>
                <h3 style={{ margin: 0 }}>
                    {format(currentDate, "MMMM yyyy")}
                </h3>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "5px",
                }}
            >
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                        <div
                            key={day}
                            style={{ textAlign: "center", fontWeight: "bold" }}
                        >
                            {day}
                        </div>
                    )
                )}
                {days.map((day) => (
                    <div
                        key={day.toISOString()}
                        style={{
                            padding: "10px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            textAlign: "center",
                            cursor: "pointer",
                            ...getDayStyle(day),
                        }}
                        title={
                            events.find((event) =>
                                isSameDay(new Date(event.date), day)
                            )?.description || ""
                        }
                        onClick={() => handleDateClick(day)}
                    >
                        {format(day, "d")}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
