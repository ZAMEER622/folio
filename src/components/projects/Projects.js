import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index"; // Ensure projectFour is imported
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="Fitness App"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          liveLink="https://didactic-sniffle.vercel.app"
          githubLink="https://github.com/yourusername/fitness-app" // Replace with your actual GitHub link
        />
        <ProjectsCard
          title="VPN Website"
          des="A feature-rich VPN website built with Tailwind CSS. Secure your online presence with ease and style!"
          src={projectTwo} // Ensure this is the correct image for the VPN project
          liveLink="https://lasles-vpn-tailwind-css-project-nccosfpda.vercel.app" // Correct live link
          githubLink="https://github.com/yourusername/vpn-website" // Replace with your actual GitHub link
        />
        <ProjectsCard
          title="Chatting App"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="Project Four" // Update with the actual title of your new project
          des="Description of Project Four. Highlight its features and purpose." // Update with a brief description
          src={projectFour} // Ensure this is the correct image for projectFour
          liveLink="https://your-project-four-live-link.com" // Replace with the actual live link
          githubLink="https://github.com/yourusername/project-four" // Replace with your actual GitHub link
        />
      </div>
    </section>
  );
};

export default Projects; // Ensure this line is present