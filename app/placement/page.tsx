"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { placementData } from "@/data/placement/all-placement";
import { topPlacements } from "@/data/placement/top-placement";

const PlacementHome = () => {
    return (
        <div className="p-6 font-sans space-y-8">
            {/* Top Placement Section */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Top 15 Placements
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> {/* Reduced gap */}
                    {topPlacements.map((student, index) => (
                        <div
                            key={`${index}-top-placement`}
                            className="flex flex-col items-center space-y-2"
                        >
                            <img
                                src={student.image} // Using the actual image
                                alt={`${student.name}'s profile`}
                                className="w-32 h-32 rounded-full shadow-lg" // Increased size of the image
                            />
                            <div className="text-center">
                                <p className="font-semibold text-lg">{student.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {student.company}
                                </p>
                                <p className="text-green-600 text-sm font-medium">
                                    {student.package}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Year Wise Placements */}
            <div className="p-6 font-sans space-y-8">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Year Wise Placements
                </h1>
                <Tabs
                    defaultValue={Object.keys(placementData)[0]}
                    className="container mx-auto"
                >
                    <TabsList>
                        {Object.keys(placementData).map((year, idx) => (
                            <TabsTrigger value={year} key={`${idx}-tab-trigger`}>
                                {year}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.keys(placementData).map((year, idx) => (
                        <TabsContent value={year} key={`${idx}-tab-content`}>
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-foreground">
                                                Name
                                            </th>
                                            <th className="px-4 py-2 text-left text-foreground">
                                                Company
                                            </th>
                                            <th className="px-4 py-2 text-left text-foreground">
                                                Role
                                            </th>
                                            <th className="px-4 py-2 text-left text-foreground">
                                                Package (LPA)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {placementData[year].map((student, index) => (
                                            <tr
                                                key={`${index}-year-placement`}
                                                className="font-semibold text-muted-foreground"
                                            >
                                                <td className="px-4 py-2">{student.name}</td>
                                                <td className="px-4 py-2">{student.company}</td>
                                                <td className="px-4 py-2">{student.role}</td>
                                                <td className="px-4 py-2 text-green-600">
                                                    {student.package}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default PlacementHome;
