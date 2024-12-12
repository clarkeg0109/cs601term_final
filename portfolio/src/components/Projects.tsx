import React from 'react';
import {render} from "@testing-library/react";

type Project = {
    id: number;
    title: string;
    description: string;
};

const projects: Project[] = [
    { id: 1, title: 'Project One', description: 'A cool project about X.' },
    { id: 2, title: 'Project Two', description: 'A fascinating app that does Y.' },
];

const Projects: React.FC = () => (

    <section>
        <h2 className ="projects"> Projects </h2>
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default Projects;
