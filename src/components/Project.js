import React from "react";
import { ProjectHeader } from "./ProjectHeader";
import { VideoInfo } from "./VideoInfo";
import { VideoDemo } from "./VideoDemo";

export const Project = (props) => {
    return (
        <div className="project-info">
            <a href={props.type === "work" ? "/#portfolio" : "/#projects"}>
                <div className="close">X</div>
            </a>
            <div className="project-content">
                <ProjectHeader
                    title={props.title}
                    description={props.description}
                    live={props.live}
                    github={props.github}
                />
                <VideoDemo video={props.video} />
                <VideoInfo
                    languages={props.languages}
                    timestamps={props.timestamps}
                />
            </div>
        </div>
    );
};
