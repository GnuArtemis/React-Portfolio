import React from 'react'

export default function About() {
    return (
        <div>
    <br/>
    <br/>

        <main className="container px-3">
        <div className="row">
            {/*  In order to create a nice asymetric alignment on larger screens, there are 2 columns created, one with content, one empty. Below the middle breakpoint, the empty column collapses and the content fills the entire screen. */}
            <div className="col-md-10">
                <div className="row">
                    <div className="col content-title">
                        <h2>About Me</h2>
                    </div>
                </div>

                {/*  An aesthetic className that creates a purple elliptical line break. */}
                <div className="row line-break"></div>

                {/*  Extended Brand statement */}
                <div className="row">
                    <div className="col">
                        {/*  headshot ID has to be an ID, rather than a className, to fix a bug where Git deployment was not displaying the CSS className */}
                        <img src="Assets/Headshot.jpg" className="img-thumbnail float-left" id="headshot"
                            alt="A headshot of Ann Guinee"/>
                        <p>
                            Ann is a burgeoning software developer, with a background in mathematics and music, and a
                            special interest in finding unique solutions to unusual problems. With a fully functioning
                            music analysis app with a fully manipulable keyboard, a history of solid smaller projects,
                            and two bachelor degrees attained concurrently, her track record speaks for itself,
                            describing a passionate, motivated individual with an enjoyment of problem-solving and a
                            deep respect for teamwork. Currently, Ann is seeking to grow her skills and experience as a
                            programmer, particularly in regards to working with data, databases, and the manipulations
                            necessary to make that data useful to the human recipient.
                        </p>
                        <p> Her dream is to research the science of music, and she would particularly enjoy pushing the
                            boundaries of music technology and software. Check out her first project in that vein, the
                            Music Chord Identifier!
                        </p>
                        <p> Specifically, Ann worked with the Distance Learning department at CIM to present music
                            lessons with current technology--from history to science applications--to audiences anywhere
                            between kindergarten and senior retirement all around the globe. Reaching out to disparate
                            communities in this way illuminated both the importance of music to all human beings, and
                            the importance of technology that allows us to reach distant communities. 
                        </p>
                        <br/>

                    </div>
                </div>

                {/*  The list below contains links to my social media pages. */}
                <div className="row">
                    <div className="col">
                        <ul className="list-group list-group-horizontal-sm">
                            <li className="list-group-item flex-fill"><a
                                    href="https://www.linkedin.com/in/ann-guinee-b8186718b/" target="blank">LinkedIn</a>
                            </li>

                            <li className="list-group-item flex-fill"> <a href="https://github.com/GnuArtemis">GitHub</a>
                            </li>
                            <li className="list-group-item flex-fill"><a href="Assets/Resume-AGUINEE.pdf"
                                    target="blank">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  Empty div to control spacing in a mobile-responsive manner. */}
            <div className="col-md-2"></div>

        </div>
    </main>
    <br/>
    <br/>
    <br/>
    <br/>

                                    </div>
    )
}
