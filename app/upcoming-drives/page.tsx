"use client";

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
    },
    {
        company: "Microsoft",
        role: "Data Scientist",
        package: "32 LPA",
        skills: "Python, Machine Learning, SQL, Statistics",
    },
    {
        company: "Amazon",
        role: "Cloud Architect",
        package: "30 LPA",
        skills: "AWS, DevOps, Cloud Computing, System Design",
    },
    {
        company: "Tesla",
        role: "Machine Learning Engineer",
        package: "28 LPA",
        skills: "Python, TensorFlow, Deep Learning, AI",
    },
];

const PlacementHome = () => {
    return (
        <div className="p-6 font-sans space-y-8">
            {/* Navigation Section */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Upcoming Placement Drives
                </h1>
            </div>

            {/* Upcoming Drives Table */}
            <div className="p-6 font-sans space-y-8">
                <Table className="container mx-auto">
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
                                Skills/Requirements
                            </TableHead>
                            <TableHead className="text-foreground">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {upcomingDrives.map((drive, index) => (
                            <TableRow
                                key={`${index}-upcoming-drive`}
                                className="font-semibold text-muted-foreground"
                            >
                                <TableCell>{drive.company}</TableCell>
                                <TableCell>{drive.role}</TableCell>
                                <TableCell className="text-green-600">
                                    {drive.package}
                                </TableCell>
                                <TableCell>{drive.skills}</TableCell>
                                <TableCell>
                                    <button
                                        onClick={() =>
                                            alert(
                                                `You applied to ${drive.company}!`
                                            )
                                        }
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Apply
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default PlacementHome;
