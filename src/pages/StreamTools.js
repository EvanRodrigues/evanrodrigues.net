import React from "react";
import { ProjectContainer } from "../components/ProjectContainer";
import { Project } from "../components/Project";

export const StreamTools = () => {
    return (
        <ProjectContainer type="project">
            <Project
                title="Stream Tools"
                type="project"
                description="A platform to distribute my twitch.tv widgets to my friends to use. It's my first full stack personal project and is consistently being updated with new widgets and features."
                video="https://www.youtube.com/embed/4vyPTh6EWkw"
                live="https://stream-goal.herokuapp.com/"
                github="https://github.com/EvanRodrigues/stream-tools"
                languages={[
                    "Node.js",
                    "Express",
                    "JavaScript",
                    "React/Redux",
                    "Jest",
                    "MongoDB",
                    "HTML",
                    "SASS/CSS",
                ]}
                timestamps={[
                    "0:00 - Intro",
                    "1:12 - Logging In",
                    "2:04 - Home Page",
                    "2:48 - Goal Dashboard",
                    "4:19 - Changing Settings",
                    "8:03 - Bar In Action",
                ]}
            />
        </ProjectContainer>
    );
};
