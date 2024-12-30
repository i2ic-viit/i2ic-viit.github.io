"use client";
import Link from "next/link";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { topPlacements } from "@/data/placement/top-placement";
import { placementData } from "@/data/placement/all-placement";

const PlacementHome = () => {
    // Data for each year (this can be fetched from an API if needed)
    // const placementData = {
    //     "2021-2022": [
    //         {
    //             name: "Eve",
    //             company: "Facebook",
    //             role: "Product Manager",
    //             package: "22 LPA",
    //         },
    //         {
    //             name: "Frank",
    //             company: "Netflix",
    //             role: "Software Engineer",
    //             package: "20 LPA",
    //         },
    //         {
    //             name: "Grace",
    //             company: "Tesla",
    //             role: "Machine Learning Engineer",
    //             package: "19 LPA",
    //         },
    //         {
    //             name: "Hank",
    //             company: "SpaceX",
    //             role: "Systems Engineer",
    //             package: "18 LPA",
    //         },
    //         {
    //             name: "Ivy",
    //             company: "Adobe",
    //             role: "Data Analyst",
    //             package: "17 LPA",
    //         },
    //         {
    //             name: "Jack",
    //             company: "Intel",
    //             role: "Cloud Engineer",
    //             package: "16 LPA",
    //         },
    //         {
    //             name: "Alice",
    //             company: "Google",
    //             role: "Software Engineer",
    //             package: "30 LPA",
    //         },
    //         {
    //             name: "Bob",
    //             company: "Microsoft",
    //             role: "Data Scientist",
    //             package: "28 LPA",
    //         },
    //         {
    //             name: "Charlie",
    //             company: "Amazon",
    //             role: "Cloud Engineer",
    //             package: "25 LPA",
    //         },
    //         {
    //             name: "David",
    //             company: "Apple",
    //             role: "DevOps Engineer",
    //             package: "24 LPA",
    //         },
    //     ],
    //     "2022-2023": [
    //         {
    //             name: "Grace",
    //             company: "Tesla",
    //             role: "Machine Learning Engineer",
    //             package: "19 LPA",
    //         },
    //         {
    //             name: "Hank",
    //             company: "SpaceX",
    //             role: "Systems Engineer",
    //             package: "18 LPA",
    //         },
    //         {
    //             name: "Ivy",
    //             company: "Adobe",
    //             role: "Data Analyst",
    //             package: "17 LPA",
    //         },
    //         {
    //             name: "Jack",
    //             company: "Intel",
    //             role: "Cloud Engineer",
    //             package: "16 LPA",
    //         },
    //         {
    //             name: "Alice",
    //             company: "Google",
    //             role: "Software Engineer",
    //             package: "30 LPA",
    //         },
    //         {
    //             name: "Bob",
    //             company: "Microsoft",
    //             role: "Data Scientist",
    //             package: "28 LPA",
    //         },
    //         {
    //             name: "Charlie",
    //             company: "Amazon",
    //             role: "Cloud Engineer",
    //             package: "25 LPA",
    //         },
    //         {
    //             name: "David",
    //             company: "Apple",
    //             role: "DevOps Engineer",
    //             package: "24 LPA",
    //         },
    //         {
    //             name: "Eve",
    //             company: "Facebook",
    //             role: "Product Manager",
    //             package: "22 LPA",
    //         },
    //         {
    //             name: "Frank",
    //             company: "Netflix",
    //             role: "Software Engineer",
    //             package: "20 LPA",
    //         },
    //     ],
    //     "2023-2024": [
    //         {
    //             name: "Lucas",
    //             company: "Microsoft",
    //             role: "Data Analyst",
    //             package: "33 LPA",
    //         },
    //         {
    //             name: "Sophia",
    //             company: "Tesla",
    //             role: "Robotics Engineer",
    //             package: "31 LPA",
    //         },
    //         {
    //             name: "Oliver",
    //             company: "Meta",
    //             role: "Machine Learning Engineer",
    //             package: "29 LPA",
    //         },
    //         {
    //             name: "Amelia",
    //             company: "Amazon",
    //             role: "Data Scientist",
    //             package: "27 LPA",
    //         },
    //         {
    //             name: "James",
    //             company: "Apple",
    //             role: "Product Manager",
    //             package: "26 LPA",
    //         },
    //         {
    //             name: "Isabella",
    //             company: "Google",
    //             role: "Software Engineer",
    //             package: "24 LPA",
    //         },
    //         {
    //             name: "Mason",
    //             company: "Spotify",
    //             role: "Cloud Architect",
    //             package: "23 LPA",
    //         },
    //         {
    //             name: "Avery",
    //             company: "Netflix",
    //             role: "Full Stack Developer",
    //             package: "21 LPA",
    //         },
    //         {
    //             name: "Liam",
    //             company: "SpaceX",
    //             role: "Systems Engineer",
    //             package: "20 LPA",
    //         },
    //         {
    //             name: "Zoe",
    //             company: "Adobe",
    //             role: "Frontend Developer",
    //             package: "19 LPA",
    //         },
    //     ],
    // };

    // Set default selected year and its data
    const [selectedYear, setSelectedYear] = useState("2019-2020");
    const [displayedStudents, setDisplayedStudents] = useState(
        placementData[selectedYear]
    );

    // Handle click on year navigation links
    const handleYearChange = (year: string) => {
        setSelectedYear(year);
        setDisplayedStudents(placementData[year]);
    };

    return (
        <div className="p-6 font-sans space-y-8">
            {/* Navigation Section */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Top Placement's
                </h1>
            </div>

            {/* Top 10 Placements - Table */}
            <div className="p-6 font-sans space-y-8">
                <Table className="container mx-auto">
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader className="bg-secondary">
                        <TableRow>
                            <TableHead className="text-foreground">
                                Rank
                            </TableHead>
                            <TableHead className="text-foreground">
                                Name
                            </TableHead>
                            <TableHead className="text-foreground">
                                Company
                            </TableHead>
                            <TableHead className="text-foreground">
                                Package (LPA)
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {topPlacements.map((student, index) => (
                            <TableRow
                                key={`${index}-top-placement`}
                                className="font-semibold text-muted-foreground"
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.company}</TableCell>
                                <TableCell className="text-green-600">
                                    {student.package}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* <table className="table-auto w-full border-collapse border border-gray-300 text-left">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">
                                Rank
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Name
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Company
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Package (LPA)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {placements.map((student, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white even:bg-gray-50"
                            >
                                <td className="border border-gray-300 px-4 py-2">
                                    {index + 1}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {student.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {student.company}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-green-600">
                                    {student.package}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>

            <div className="p-6 font-sans space-y-8">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Year Wise Placements'
                </h1>
              <Tabs defaultValue={Object.keys(placementData)[0]} className="container mx-auto">
              <TabsList>
                {Object.keys(placementData).map((key, idx) => (
                <TabsTrigger value={key} key={`${idx}-tab-trigger`}>{key}</TabsTrigger>
                ))}
                
              </TabsList>
              {Object.keys(placementData).map((key, idx) => (
              <TabsContent value={key} key={`${idx}-tab-content`}>
                 <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader className="bg-secondary">
                        <TableRow>
                            <TableHead className="text-foreground">
                                Name
                            </TableHead>
                            <TableHead className="text-foreground">
                                Company
                            </TableHead>
                            <TableHead className="text-foreground">
                                Role
                            </TableHead>
                            <TableHead className="text-foreground">
                                Package (LPA)
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {placementData[key].map((student, index) => (
                            <TableRow
                                key={`${index}-top-placement`}
                                className="font-semibold text-muted-foreground"
                            >
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.company}</TableCell>
                                <TableCell>{student.role}</TableCell>
                                <TableCell className="text-green-600">
                                    {student.package}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
              </TabsContent>
              ))}
            </Tabs>
            </div>
            
            {/* Placed Student Info Section with Navigation */}
            {/* <div className="p-6 font-sans space-y-8">
                <div className="flex space-x-4 mb-6">
                    <button
                        onClick={() => handleYearChange("2019-2020")}
                        className="px-4 py-2 text-gray-500 hover:text-blue-500 hover:underline"
                    >
                        2019-2020
                    </button>
                    <button
                        onClick={() => handleYearChange("2020-2021")}
                        className="px-4 py-2 text-gray-500 hover:text-blue-500 hover:underline"
                    >
                        2020-2021
                    </button>
                    <button
                        onClick={() => handleYearChange("2021-2022")}
                        className="px-4 py-2 text-gray-500 hover:text-blue-500 hover:underline"
                    >
                        2021-2022
                    </button>
                    <button
                        onClick={() => handleYearChange("2022-2023")}
                        className="px-4 py-2 text-gray-500 hover:text-blue-500 hover:underline"
                    >
                        2022-2023
                    </button>
                    <button
                        onClick={() => handleYearChange("2023-2024")}
                        className="px-4 py-2 text-gray-500 hover:text-blue-500 hover:underline"
                    >
                        2023-2024
                    </button>
                </div>

                <table className="table-auto w-full border-collapse border border-gray-300 text-left">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">
                                Name
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Company
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Role
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Package
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedStudents.map((student, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white even:bg-gray-50"
                            >
                                <td className="border border-gray-300 px-4 py-2">
                                    {student.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {student.company}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {student.role}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-green-600">
                                    {student.package}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default PlacementHome;
