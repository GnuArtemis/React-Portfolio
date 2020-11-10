import React from 'react'
const projectInfo = require("../utils/bigProjectInfo.json")

export default function ProjectPage({ projectid }) {
    const project=projectInfo[projectid]
    
    
    const displayTechnologies = () => {
        const tech = [];
        for (let i = 0; i < project.technologyNames.length; i++) {
            tech.push(<li key={i}><a href={project.technologyLinks[i]} target="blank">{project.technologyNames[i]}</a>: {project.technologyDesc[i]} </li>);
        }
        return tech;
    };
    return (
        <div>
            <br />
            <br />

            <main className="container px-3">
                <div className="row">
                    <div className="col-md-10">
                        {/* Content title */}
                        <div className="row">
                            <div className="col content-title">
                                <h2>{project.title}</h2>
                            </div>
                        </div>

                        {/* An aesthetic className that creates a purple elliptical line break. */}
                        <div className="row line-break"></div>

                        <img className="img-fluid mt-2" src={project.image}
                            alt={project.alt} />

                        <h3>Description</h3>
                        <p className="px-2">{project.description}</p>

                        <h3>Technologies</h3>
                        <ul>
                            {displayTechnologies()}
                        </ul>
                        <br />

                        <div className="d-flex justify-content-between">
                            <a className="justify-content-end"
                                href={project.github}>Github Repository</a>
                            <a className="justify-content-end"
                                href={project.deploy}>Website</a>
                        </div>

                        <div className="row">
                            <div className="col">
                                <br />
                            </div>
                        </div>

                    </div>

                    {/* Empty div to control spacing in a mobile-responsive manner. */}
                    <div className="col-md-2"></div>

                </div>

            </main>

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
