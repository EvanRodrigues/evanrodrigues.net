import React from "react";
import { HomeSection } from "../components/HomeSection";
import { Intro } from "../components/Intro";
import { WorkExperience } from "../components/WorkExperience";
import { Projects } from "../components/Projects";
import { MyStory } from "../components/MyStory";
import "../stylesheets/css/Home.css";
import { Contact } from "../components/Contact";

export const Home = () => {
    return (
        <div className="content">
            <HomeSection id="intro">
                <Intro />
            </HomeSection>
            <HomeSection id="portfolio" title="Work Experience">
                <WorkExperience />
            </HomeSection>
            <HomeSection id="projects" title="Projects">
                <Projects />
            </HomeSection>
            <HomeSection id="myStory" title="My Story">
                <MyStory />
            </HomeSection>
            <HomeSection
                id="contact"
                title="Contact Me"
                contact="contact-container"
            >
                <Contact />
            </HomeSection>
        </div>
    );
};
