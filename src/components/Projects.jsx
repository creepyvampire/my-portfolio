import React from 'react'

const Projects = () => {

    const placeholder = "https://placehold.co/200x200"

    const projectArray = [
        {
            title: "Web Application for KLV Data Extraction and Visualization",
            image: placeholder,
            description:
                "Developed a web application to extract KLV data from drone video files and visualize drone and target positions on a map using the ArcGIS JavaScript SDK. The application features real-time plotting and video overlay for simulating object tracking.",
            technologies: ["ArcGIS JavaScript SDK", "HTML", "CSS", "JavaScript"],
        },
        {
            title: "Skill-based Job Matching Platform",
            image: placeholder,
            description:
                "Created a web application for talent acquisition where candidates input their skills to get a ranked list of jobs they are most suited to. Employers can post jobs and view a ranked list of suitable candidates for each job using an algorithm that matches and ranks based on stored database information.",
            technologies: ["Next.js", "MERN Stack"],
        },
        {
            title: "Questify: A Mobile App that Gamifies Learning",
            image: placeholder,
            description:
                "A mobile application that addresses disengagement and frustration with traditional learning by using interactive quests to encourage exploration of surroundings and knowledge acquisition.",
            technologies: ["React Native", "Firebase", "Gemini AI", "Gemini Pro Vision"],
        },
        {
            title: "Geospatial Analysis of Quarries",
            image: placeholder,
            description:
                "Developed a web application using Landsat Satellite Imagery to perform spectral band analysis, assess vegetation health, land surface temperature, and display the Air Quality Index of quarries.",
            technologies: ["Mapbox GL JS", "Next.js", "OpenWeather API"],
        },
    ];


    return (
        <>
            <div class='border-b border-neutral-900 pb-4'>
                <h2 class='my-20 text-center text-4xl'>Projects</h2>
                <div>
                    {projectArray.map((p, index) => (
                        <div key={index} class='mb-8 flex flex-wrap lg:justify-center'>
                            <div class='w-full lg:w-1/4'>
                                <img class='mb-6 rounded' src={p.image} width={200} height={200} alt="Project Image"></img>
                            </div>
                            <div class='w-full max-w-xl lg:w-3/4'>
                                <h6 class='mb-2 font-semibold'>{p.title}</h6>
                                <p class='mb-4 text-neutral-400'>{p.description}</p>
                                {p.technologies.map((tech, index) => (
                                    <span class='text-sm bg-neutral-900 text-purple-400 rounded-full px-4 py-1 mt-4 mr-2 font-medium' key={index}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects