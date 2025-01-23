"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const upcomingDrives = [
    {
        company: "Accenture",
        role: "Software Engineer",
        package: "35 LPA",
        skills: "Java, SQL, Data Structures, Algorithms",
        pdfLink: "/pdfs/accenture.pdf",
        logo: "/companies/accenture.svg", // Path to the company's SVG logo
    },
    {
        company: "Amazon",
        role: "Cloud Architect",
        package: "30 LPA",
        skills: "AWS, DevOps, Cloud Computing, System Design",
        pdfLink: "/pdfs/amazon.pdf",
        logo: "/companies/amazon.svg", // Path to the company's SVG logo
    },
    {
        company: "BMW",
        role: "Mechanical Engineer",
        package: "28 LPA",
        skills: "CAD, Automotive Engineering, MATLAB",
        pdfLink: "/pdfs/bmw.pdf",
        logo: "/companies/bmw.svg", // Path to the company's SVG logo
    },
    {
        company: "Mercedes",
        role: "Automotive Software Engineer",
        package: "32 LPA",
        skills: "C++, Embedded Systems, IoT",
        pdfLink: "/pdfs/mercedes.pdf",
        logo: "/companies/mercedes-benz.svg", // Path to the company's SVG logo
    },
    {
        company: "MasterCard",
        role: "Data Scientist",
        package: "34 LPA",
        skills: "Python, Machine Learning, Data Analysis",
        pdfLink: "/pdfs/mastercard.pdf",
        logo: "/companies/mastercard.svg", // Path to the company's SVG logo
    },
    {
        company: "Microsoft",
        role: "Software Engineer",
        package: "36 LPA",
        skills: "C#, .NET, Cloud Computing",
        pdfLink: "/pdfs/microsoft.pdf",
        logo: "/companies/microsoft.svg", // Path to the company's SVG logo
    },
    {
        company: "Oracle",
        role: "Database Administrator",
        package: "33 LPA",
        skills: "SQL, PL/SQL, Database Design",
        pdfLink: "/pdfs/oracle.pdf",
        logo: "/companies/oracle.svg", // Path to the company's SVG logo
    },
];

const PlacementHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Default to 1 slide on smaller screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // For screen widths less than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides for tablet/medium screens
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // For screen widths less than 768px (mobile)
                settings: {
                    slidesToShow: 1, // Show 1 slide for mobile screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="p-6 font-sans space-y-8">
            {/* Navigation Section */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Upcoming Placement Drives
                </h1>
            </div>

            {/* Carousel for Upcoming Drives */}
            <Slider {...settings} className="p-6 font-sans space-y-8">
                {upcomingDrives.map((drive, index) => (
                    <div
                        key={`${index}-upcoming-drive`}
                        className="p-4 rounded shadow flex items-center justify-center"
                        style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "300px", // Ensure height is set
                        }}
                    >
                        <div className="bg-white bg-opacity-90 p-4 rounded-lg w-full flex flex-col items-center">
                            <img
                                src={drive.logo}
                                alt={`${drive.company} Logo`}
                                className="w-24 h-24 mb-4"
                            />
                            <h2 className="text-xl font-bold mb-2">{drive.company}</h2>
                            <p><strong>Role:</strong> {drive.role}</p>
                            <p><strong>Package (LPA):</strong> {drive.package}</p>
                            <p><strong>Skills:</strong> {drive.skills}</p>
                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={() => alert(`You applied to ${drive.company}!`)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Apply
                                </button>
                                <a
                                    href={drive.pdfLink}
                                    download
                                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                >
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PlacementHome;
