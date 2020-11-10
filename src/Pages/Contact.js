import React from 'react'

export default function Contact() {
    return (
        <div>
            <br/>
            <br/>

            <main className="container px-3">
        <div className="row">
            {/* In order to create a nice asymetric alignment on larger screens, there are 2 columns created, one with content, one empty. Below the middle breakpoint, the empty column collapses and the content fills the entire screen. */}
            <div className="col-md-10">
                {/* Form heading */}
                <div className="row">
                    <div className="col content-title">
                        <h2>Contact</h2>
                    </div>
                </div>

                {/* An aesthetic className that creates a purple elliptical line break. */}
                <div className="row line-break"></div>

                <p> <strong>Email:</strong> annmguinee@gmail.com</p>
                <p> <strong>Phone Number:</strong> 206-817-6872</p>

                {/* Form "name" entry */}
                <div className="form-row">
                    <div className="col">
                        <div className="form-group">
                            <label for="contact-Name">Name:</label>
                            <input type="text" className="form-control" placeholder="Name - COMING SOON" id="contact-Name"
                                name="First-Last" readonly/>
                        </div>
                    </div>
                </div>

                {/* Form "email" entry */}
                <div className="form-row">
                    <div className="col">
                        <div className="form-group">
                            <label for="contact-Email">Email:</label>
                            <input type="email" className="form-control" placeholder="Email - COMING SOON" id="contact-Email"
                                name="respond-To" readonly/>
                        </div>
                    </div>
                </div>

                {/* Form "message" entry */}
                <div className="form-row">
                    <div className="col">
                        <div className="form-group">
                            <label for="contact-Message">Message:</label>
                            <input type="text" className="form-control"
                                placeholder="Coming soon! Please contact at annmguinee@gmail.com for the time being."
                                id="contact-Message" name="Message" readonly/>
                        </div>
                    </div>
                </div>

                {/* Form "submit" button */}
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </div>
            </div>

            {/* Empty div to control spacing in a mobile-responsive manner. */}
            <div className="col-md-2"></div>

        </div>
    </main>
    <br/>
    <br/>
    <br/>

        </div>
    )
}
