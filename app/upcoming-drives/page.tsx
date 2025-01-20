"use client";

import React, { useState } from "react"; // Import React and useState
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const upcomingDrives = [
    {
        company: "Google",
        role: "Software Engineer",
        package: "35 LPA",
        skills: "JavaScript, React, Data Structures, Algorithms",
        pdfLink: "/pdfs/google.pdf",
    },
    {
        company: "Microsoft",
        role: "Data Scientist",
        package: "32 LPA",
        skills: "Python, Machine Learning, SQL, Statistics",
        pdfLink: "/pdfs/microsoft.pdf",
    },
    {
        company: "Amazon",
        role: "Cloud Architect",
        package: "30 LPA",
        skills: "AWS, DevOps, Cloud Computing, System Design",
        pdfLink: "/pdfs/amazon.pdf",
    },
    {
        company: "Tesla",
        role: "Machine Learning Engineer",
        package: "28 LPA",
        skills: "Python, TensorFlow, Deep Learning, AI",
        pdfLink: "/pdfs/tesla.pdf",
    },
];

const PlacementHome = () => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null); // State to track the expanded row

    const toggleRow = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index); // Toggle the expanded row
    };

    return (
        <div className="p-6 font-sans space-y-8">
            {/* Navigation Section */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Upcoming Placement Drives
                </h1>
            </div>

            {/* Responsive Table with Expandable Rows */}
            <div className="p-6 font-sans space-y-8">
                <div className="overflow-x-auto">
                    <Table className="table-auto w-full min-w-[600px]">
                        <TableHeader className="bg-secondary">
                            <TableRow>
                                <TableHead className="text-foreground">
                                    Company
                                </TableHead>
                                <TableHead className="text-foreground">
                                    Role
                                </TableHead>
                                <TableHead className="text-foreground">
                                    Package (LPA)
                                </TableHead>
                                <TableHead className="text-foreground">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {upcomingDrives.map((drive, index) => (
                                <React.Fragment key={`${index}-upcoming-drive`}>
                                    <TableRow
                                        className="font-semibold text-muted-foreground cursor-pointer"
                                        onClick={() => toggleRow(index)} // Toggle the row on click
                                    >
                                        <TableCell>{drive.company}</TableCell>
                                        <TableCell>{drive.role}</TableCell>
                                        <TableCell className="text-green-600">
                                            {drive.package}
                                        </TableCell>
                                        <TableCell className="flex gap-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent row toggle on button click
                                                    alert(
                                                        `You applied to ${drive.company}!`
                                                    );
                                                }}
                                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                            >
                                                Apply
                                            </button>
                                            <a
                                                href={drive.pdfLink}
                                                download
                                                onClick={(e) => e.stopPropagation()} // Prevent row toggle on link click
                                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                            >
                                                Download PDF
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                    {expandedRow === index && (
                                        <TableRow>
                                            <TableCell colSpan={4} className="bg-gray-100">
                                                <div className="p-4">
                                                    <p>
                                                        <strong>Skills:</strong> {drive.skills}
                                                    </p>
                                                    <p>
                                                        <strong>More Info:</strong> Additional details about the drive
                                                        can go here.
                                                    </p>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default PlacementHome;
