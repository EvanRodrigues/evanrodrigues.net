import React from "react";
import { HomeSection } from "../components/HomeSection";
import "../stylesheets/css/Home.css";

export const Home = () => {
    return (
        <div className="content">
            <HomeSection id="intro"></HomeSection>
            <HomeSection id="portfolio" title="Portfolio"></HomeSection>
            <HomeSection id="projects" title="Projects"></HomeSection>
            <HomeSection id="myStory" title="My Story"></HomeSection>
        </div>
    );
};
