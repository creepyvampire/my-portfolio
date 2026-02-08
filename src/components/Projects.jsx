import React from 'react'
import dtwinpic from "../assets/dtwin.png";
import klvpic from "../assets/klv.png";
import questpic from "../assets/questify.png";
import geoquarpic from "../assets/geoquarry.png";
import gcspic from "../assets/gcs.png";

const Projects = () => {

    const placeholder = "https://placehold.co/200x200"

    const projectArray = [
    {
        title: "Solar Potential Assessment System (Digital Twin)",
        image: dtwinpic,
        description:
            "Developed a geospatial digital twin in Unreal Engine using the Cesium API to transform OpenStreetMap data into accurate 3D urban environments. Implemented a ray-casting algorithm to detect precise shadow patterns and dynamically calculate photovoltaic energy potential based on solar irradiance.",
        technologies: ["Unreal Engine", "Cesium", "C++", "OpenStreetMap"],
    },
    {
        title: "UAV Communication & GCS Architecture",
        image: gcspic,
        description:
            "Designed and implemented the entire MAVLink communication protocol for custom UAVs, enabling full telemetry and command transmission. Overhauled the Mission Planner Ground Control System (GCS) to support organizational needs and created Hardware-in-Loop (HIL) simulations using MATLAB/Simulink.",
        technologies: ["C/C++", "MAVLink", "MATLAB", "Simulink", "Mission Planner"],
    },
    {
        title: "KLV Data Extraction & Real-Time Tracking",
        image: klvpic,
        description:
            "Built a web-based tracking tool using Python and JavaScript that extracts KLV metadata from drone video feeds to map target positions in real-time. Integrated ArcGIS to overlay live video footage onto 3D maps, simulating a real-time object tracking view from the drone's perspective.",
        technologies: ["Python", "ArcGIS API", "JavaScript", "HTML/CSS"],
    },
    {
        title: "Skill-Based Job Matching Platform",
        description:
            "Architected a semantic search engine by integrating BERT to parse resumes and match them against job descriptions with high contextual accuracy. Implemented a vector-based ranking system that utilizes embeddings to score candidate suitability, bypassing traditional keyword limitations.",
        technologies: ["Next.js", "BERT", "MERN Stack", "Tailwind CSS"],
    },
    {
        title: "Questify: Gamified Learning Platform",
        image: questpic,
        description:
            "Built a mobile application that combats disengagement by turning real-world surroundings into interactive learning quests. Leveraged Google Gemini Vision Pro to generate dynamic, context-aware educational content by analyzing the user's physical environment in real-time.",
        technologies: ["React Native", "Firebase", "Google Gemini", "Gemini Pro Vision"],
    },
    {
        title: "Geospatial Analysis of Stone Quarries",
        image: geoquarpic,
        description:
            "Developed a web application using Google Earth Engine and Landsat imagery to perform spectral band analysis. The system assesses vegetation health, land surface temperature, and air quality indices for environmental monitoring of quarry sites.",
        technologies: ["Google Earth Engine", "React", "Mapbox JS", "Satellite Imagery"],
    },
];


    return (
        <>
            <div class='border-b border-neutral-900 pb-4'>
                <h2 class='my-20 text-center text-4xl'>Projects</h2>
                <div>
                    {projectArray.map((p, index) => (
                        <div key={index} class='mb-8 flex flex-wrap lg:justify-center'>
                            <div class='w-full lg:w-1/4 mr-8'>
                                <img class='mb-6 rounded' src={p.image} width={600} height={300} alt="Project Image"></img>
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