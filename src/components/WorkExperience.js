import React from "react";
import { Job } from "./Job";
import "../stylesheets/css/WorkExperience.css";

export const WorkExperience = () => {
    return (
        <div className="portfolio-container">
            <Job
                title="LumiAero"
                link="/lumiaero"
                date="September 2019 - February 2020"
                description="A website to manage aircraft and user information for a Microsoft Excel COM add-in called LumiAero. The add-in uses an API to provide quick calculations for future market values, and risk assessment. The website has functionality to mass import/export aircraft data to and from an Excel sheet. This greatly sped up the client's workflow. The website is linked to an Azure SQL relational database, and the project was started with ASP.NET Zero."
            />

            <Job
                title="BMA Website"
                link="/bma-website"
                date="May 2018 - September 2018"
                description="A conversion of the previous Blue Moon Analytics website into a serverless single page application using Reagent and Re-frame. This added consistency between their website and products that they developed. The conversion also allowed for more customization to the website. A pricing tool, blog, and a new nav bar for desktop and mobile were added as a part of the conversion."
            />
        </div>
    );
};
