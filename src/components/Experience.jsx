import React from 'react'

function Experience() {
    const experience = [
        {
            year: "Oct. 2023 – Nov. 2023",
            role: "Intern, Ground Control Systems",
            company: "Tata Advanced Systems Limited (TASL)",
            description: `Developed a web application using HTML, JavaScript, and Python to extract KLV data from video files. Integrated ArcGIS to plot drone and target positions, displaying the scanned area on a map in real-time. Implemented a feature to overlay video footage on the map, simulating real-time object tracking from the drone's perspective.`,
            technologies: ["HTML", "JavaScript", "Python", "ArcGIS"],
        },
        {
            year: "2021 - 2025 (Expected)",
            role: "B.E (Computer Science and Engineering)",
            company: "Dr. Ambedkar Institute of Technology",
            description: `Currently maintaining CGPA of 8.7, expected to complete course by mid-2025.`,
            technologies: [],
        },
        {
            year: "2021",
            role: "12th SSCE Graduate",
            company: "Kendriya Vidyalaya No.2",
            description: `Graduated 12th SSCE with an overall percentage of 89.4 (CBSE).`,
            technologies: [],
        },
        {
            year: "2019",
            role: "10th SCE Graduate",
            company: "Kendriya Vidyalaya No.2",
            description: `Graduated 10th SCE with an overall percentage of 89.2 (CBSE).`,
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