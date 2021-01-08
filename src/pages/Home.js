import React from "react";
import { HomeSection } from "../components/HomeSection";
import { Intro } from "../components/Intro";
import "../stylesheets/css/Home.css";

export const Home = () => {
    return (
        <div className="content">
            <HomeSection id="intro">
                <Intro />
            </HomeSection>
            <HomeSection id="portfolio" title="Work Experience"></HomeSection>
            <HomeSection id="projects" title="Projects"></HomeSection>
            <HomeSection id="myStory" title="My Story"></HomeSection>
        </div>
    );
};
