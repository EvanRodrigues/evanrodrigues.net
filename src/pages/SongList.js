import React from "react";
import { ProjectContainer } from "../components/ProjectContainer";
import { Project } from "../components/Project";

export const SongList = () => {
    return (
        <ProjectContainer type="project">
            <Project
                title="Song List"
                type="project"
                video="https://www.youtube.com/embed/04Twe1cI_Ig"
                live="https://ruffianly-inaction.000webhostapp.com/"
                github="https://github.com/EvanRodrigues/SongList"
                languages={[
                    "PHP",
                    "JavaScript",
                    "jQuery",
                    "MySQL",
                    "HTML",
                    "SASS/CSS",
                    "Bootstrap",
                ]}
                timestamps={[
                    "0:00 - Intro",
                    "0:58 - Technologies Used",
                    "1:24 - Searching",
                    "2:21 - Sorting",
                    "3:01 - Infinite Scroll",
                    "4:04 - Mobile Site",
                    "4:55 - Things to Change",
                ]}
            />
        </ProjectContainer>
    );
};
