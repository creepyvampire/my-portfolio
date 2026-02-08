import React from 'react'

function Experience() {
    const experience = [
    {
        year: "July 2025 – December 2025",
        role: "Research Associate",
        company: "Dronyug UAV Research and Development Lab",
        description: "Leading the MAVLink communication architecture for custom UAVs, taking full ownership of telemetry and command transmission. Overhauled Mission Planner GCS to align with organizational needs and developed a Hardware-in-Loop (HIL) simulation using MATLAB/Simulink for rigorous flight testing.",
        technologies: ["MAVLink", "C++", "Mission Planner", "MATLAB", "Simulink"],
    },
    {
        year: "Jan 2025 – June 2025",
        role: "Intern",
        company: "Dronyug UAV Research and Development Lab",
        description: "Developed the initial MAVLink codebase to establish basic telemetry communication. Managed hardware assembly including soldering and sensor integration, and assisted in real-world field trials and flight testing.",
        technologies: ["C/C++", "Embedded Systems", "UAV Hardware", "Flight Testing"],
    },
    {
        year: "Oct 2023 – Nov 2023",
        role: "Intern",
        company: "Tata Advanced Systems Limited (TASL)",
        description: "Built a web-based tracking tool using Python and JavaScript that extracts KLV metadata from video to map drone and target positions in real-time. Integrated ArcGIS to overlay live video footage onto the map, simulating a real-time object tracking view from the drone's perspective.",
        technologies: ["Python", "JavaScript", "ArcGIS", "KLV Metadata"],
    },
    {
        year: "2021 - 2025",
        role: "B.E (Computer Science and Engineering)",
        company: "Dr. Ambedkar Institute of Technology",
        description: "Graduated with a CGPA of 8.94.",
        technologies: [],
    },
];
    return (
        <>
            <div class='border-b border-neutral-900 pb-4'>
                <h1 class='my-20 text-center text-4xl'>Experience and Education</h1>
                <div>
                    {experience.map((exp, index) => (
                        <div key={index} class='mb-8 flex flex-wrap lg:justify-center'>
                            <div class='w-full lg:w-1/4'>
                                <p class='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                            </div>
                            <div class='w-full max-w-xl lg:w-3/4'>
                                <h6 class='mb-2 font-semibold'>{exp.role} - <span class='text-sm text-purple-100'>
                                    {exp.company}
                                </span>
                                </h6>
                                <p class='mb-4 text-neutral-400'>{exp.description}</p>
                            {exp.technologies.length > 0 && (
                                <div class='flex flex-wrap'>
                                    {exp.technologies.map((tech, index) => (
                                        <span key={index} class='text-sm bg-neutral-900 text-purple-400 rounded-full px-4 py-1 mt-4 mr-2 font-medium'>{tech}</span>
                                    ))}
                                </div>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Experience