import React from "react";
import { ProjectContainer } from "../components/ProjectContainer";
import { Project } from "../components/Project";

//Component for both Work Experience and Projects.
export const LumiAero = (props) => {
    console.log(`props.description: ${props.description}`);

    return (
        <ProjectContainer type="work">
            <Project
                title="LumiAero"
                type="work"
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
