import React from "react";
import { ProjectContainer } from "../components/ProjectContainer";
import { Project } from "../components/Project";

//Component for both Work Experience and Projects.
export const LumiAero = () => {
    return (
        <ProjectContainer type="work">
            <Project
                title="LumiAero"
                description="A website to manage aircraft and user information for a Microsoft Excel COM add-in. The COM add-in and the website communicate via an API that I designed. The site is linked to an Azure SQL relational database, and the project was started with ASP.NET Zero."
                video="https://www.youtube.com/embed/OYncR9FoC-0"
                live="none"
                github="none"
                languages={[
                    "C#",
                    "JavaScript",
                    "jQuery",
                    "HTML",
                    "CSS",
                    "SQL",
                    "Entity Framework Core",
                    "ASP .NET Zero",
                ]}
                timestamps={[
                    "0:00 - Intro",
                    "0:42 - Technologies Used",
                    "1:05 - User Management",
                    "3:10 - Aircraft Management",
                    "6:42 - Subcategory Management",
                    "8:22 - Excel Operations",
                    "15:01 - API Overview",
                ]}
            />
        </ProjectContainer>
    );
};
