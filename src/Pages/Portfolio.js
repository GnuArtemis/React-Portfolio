import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const projectInfo = require("../utils/projectInfo.json")

export default function Portfolio() {
    return (
        <div>
            <br />
            <br />
            <main className="container px-3">
                <div className="row">
                    <div className="col-md-10">
                        {/*  Content title  */}
                        <div className="row">
                            <div className="col content-title">
                                <h2>Portfolio</h2>
                            </div>
                        </div>

                        {/*  An aesthetic className that creates a purple elliptical line break.  */}
                        <div className="row line-break"></div>

                        {/*  A series of images relevant to prominent items of my portfolio  */}
                        <div className="row">
                            {/*  Big projects have their seperate page in addition to their small description here. */}
                            <div className="col-md-6 text-center">

                                <ProjectCard info={projectInfo[0]}/>

                            </div>

                            <div className="col-md-6 text-center">
                                <ProjectCard info={projectInfo[4]}/>
                                
                            </div>


                        </div>

                        <div className="row">
                            {/*  Big projects have their seperate page in addition to their small description here. */}
                            <div className="col-md-6 text-center">

                                <ProjectCard info={projectInfo[2]}/>

                            </div>

                            <div className="col-md-6 text-center">
                                <ProjectCard info={projectInfo[1]}/>
                                
                            </div>


                        </div>

                        <div className="row">
                            {/*  Big projects have their seperate page in addition to their small description here. */}
                            <div className="col-md-6 text-center">

                                
                                <ProjectCard info={projectInfo[5]}/>

                            </div>

                            <div className="col-md-6 text-center">
                                
                                <ProjectCard info={projectInfo[3]}/>
                                
                            </div>


                        </div>

                        {/*  Creates whitespace after the last image  */}
                        <div className="row">
                            <div className="col">
                                <br />
                            </div>
                        </div>
                    </div>

                    {/*  Empty div to control spacing in a mobile-responsive manner.  */}
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
