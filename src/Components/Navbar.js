import React from 'react'
import { useLocation } from 'react-router-dom'
/* Nav wrapper creates a bootstrap-stylized navbar by using the "navbar" className. Navbar-expand-lg creates mobile responsiveness at a breakpoint of laptop-size screen. Navbar elements can be manipulated with Bootstrap's margins and flexbox functionality. Some default bootstrap navbar formatting is used. */
export default function Navbar() {
    const {pathname} = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

         {/* Creates a top right website "Brand", in this case my name. mb-0 (margin-bottom zero) eliminates unnecessary whitespace in the navbar.   */}
        <span className="navbar-brand mb-0 h1 brand-design">
            Ann Guinee
        </span>

         {/* At the large breakpoint (as set by navbar-expand-lg), the navigation menu toggles from an always-visible horizontal list to a menu button that can be expanded. The button is linked to the menu by way of the ID "navbarSupportedContent" The purpose is to keep font size large (and thus links accessible) on smaller devices. The ARIA elements are not essential for function, but are for the purposes of accessibility. */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

         {/* Creates a navbar that can collapse into the icon above at a large breakpoint  */}
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
             {/* nav-item active creates a visual distinction for the currently open tab. The className ml-auto on the UL aligns the navigation items to the right, in contrast to the brand above.  */}
            <ul className="navbar-nav ml-auto">
                <li className={pathname === "/contact" ? "nav-item  active" : "nav-item" }>
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className= {pathname === "/portfolio" ? "nav-item dropdown active" : "nav-item dropdown" }>
                    <a className="nav-link dropdown-toggle" href="/portfolio" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Portfolio
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/portfolio">General</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/chord-identifier">Music Chord<br/>Identifier</a>
                        <a className="dropdown-item" href="/personify">Personify</a>
                        <a className="dropdown-item" href="/portfolio#project3">Project 3</a>
                    </div>
                </li>
                {/* === "/" || */}
                <li className= {pathname === "/about" ? "nav-item active" : "nav-item" }>
                    <a className="nav-link" href="/about">About <span className="sr-only"></span></a>
                </li>
            </ul>
        </div>
    </nav>
    )
}
