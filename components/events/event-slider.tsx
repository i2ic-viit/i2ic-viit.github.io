"use client";
import * as React from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import  Calendar  from "./calendar";


const EventSlider = () => {
    // const [date, setDate] = React.useState<Date | undefined>(new Date())

const events = [
    { date: new Date(2024, 11, 28), description: 'Event 1' },
    { date: new Date(2024, 11, 30), description: 'Event 2' },
  ];
    return (
        <div style={{ display: 'flex', margin: '1%', flexWrap: 'wrap' }}>
            <div
                className="eventsListing"
                style={{
                    flex: 7.8,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '10px', 
                    marginRight: '1%',
                }}
            >
                {[...Array(9)].map((_, index) => (
                    <Card key={index} style={{ flex: '1 1 calc(33.33% - 10px)', height: '200px', border: '2px solid black' }}>
                        <CardHeader>
                            <CardTitle>Event {index + 1}</CardTitle>
                            <CardDescription>Event {index + 1} Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Event {index + 1} Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Event {index + 1} Footer</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className='Calender' style={{ flex: '2.8', maxWidth: '40%', marginTop: '20px' }}>
                {/* <Calendar
                    mode="single"
                    // selected={date}
                    // onSelect={setDate}
                    style={{
                        width: '100%', 
                        border: '1px solid black',
                        borderRadius: '10px',
                    }} 
                /> */}
                <h2 style={{display:'flex', justifyContent:'center',marginBottom:'10px'}}><strong>Future Events</strong></h2>
                <Calendar events={events} />
            </div>
        </div>
    );
};

export default EventSlider;
