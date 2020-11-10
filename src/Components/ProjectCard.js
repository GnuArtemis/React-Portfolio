import React from 'react'

export default function ProjectCard({info}) {
    return (
        <div>
            <h3>{info.title}</h3>
            <a href={info.href}>
                <img src={info.image}
                    alt={info.alt}
                    className="img-fluid img-thumbnail mt-2 mb-2" />
            </a>
            <div className="d-flex justify-content-between">
                <span>{info.description}</span>
            </div>
            <div className="d-flex justify-content-between">
                <a href={info.github}>Github Repository</a>
                {info.href !== null ?  <a href={info.href}>More Info</a>:null}
               
                <a href={info.deploy}>Website</a>
            </div>
        </div>
    )
}
