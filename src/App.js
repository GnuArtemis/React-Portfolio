
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import ProjectPage from "./Pages/ProjectPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/chord-identifier">
          <ProjectPage projectid={0}/>
        </Route>
        <Route exact path="/personify">
        <ProjectPage projectid={1}/>
        </Route>
        <Route exact path="/plant-it">
        <ProjectPage projectid={2}/>
        </Route>
        <Route path="*">
          <p>No match, redirect to home</p>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
