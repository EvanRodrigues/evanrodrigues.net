import React from "react";
import { Job } from "./Job";
import "../stylesheets/css/WorkExperience.css";

export const WorkExperience = () => {
    return (
        <div className="portfolio-container">
            <Job
                title="LumiAero"
                date="September 2019 - February 2020"
                summary="I built a website to manage aircraft and user information for a Microsoft Excel COM add-in called LumiAero. The add-in uses an API I built to provide quick calculations for future market values, and risk assessment. I also added the ability to mass import/export aircraft data to and from an Excel sheet. This greatly sped up our client's workflow. The website is linked to an Azure SQL relational database, and the project was started with ASP.NET Zero."
            />

            <Job
                title="BMA Website"
                date="May 2018 - September 2018"
                summary="I converted the previous Blue Moon Analytics website into a serverless SPA using reagent and re-frame. At the time, Blue Moon Analytics was a Clojure shop, so this added consistency between their website and products that they developed. The conversion also allowed for more customization to the website. I was able to add a pricing tool, blog, and a new nav bar for desktop and mobile."
            />
        </div>
    );
};
