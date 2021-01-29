import React from "react";
import { ProjectContainer } from "../components/ProjectContainer";
import { Project } from "../components/Project";

export const BmaWebsite = () => {
    return (
        <ProjectContainer type="work">
            <Project
                title="BMA Website"
                type="work"
                description="I converted the previous Blue Moon Analytics site into a serverless SPA using reagent and re-frame. The new features that were added are a pricing tool, blog, and a nav bar for desktop and mobile."
                video="https://www.youtube.com/embed/1WhMwB_a87g"
                live="none"
                github="https://github.com/EvanRodrigues/bma-website"
                languages={[
                    "Clojure/ClojureScript",
                    "HTML",
                    "CSS",
                    "Reagent",
                    "re-frame",
                ]}
                timestamps={[
                    "0:00 - Intro",
                    "0:25 - Technologies Used",
                    "1:20 - About the job",
                    "2:19 - Site Navigation",
                    "2:55 - Pricing Tool",
                    "4:03 - Mobile Site",
                    "5:10 - Blog",
                ]}
            />
        </ProjectContainer>
    );
};
