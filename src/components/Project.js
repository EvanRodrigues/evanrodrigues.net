import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectHeader } from "./ProjectHeader";
import { VideoInfo } from "./VideoInfo";
import { VideoDemo } from "./VideoDemo";

export const Project = (props) => {
    let data = useLocation();
    console.log(data.state.description);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-info">
            <a href={props.type === "work" ? "/#portfolio" : "/#projects"}>
                <div className="close">X</div>
            </a>
            <div className="project-content">
                <ProjectHeader
                    title={props.title}
                    description={data.state.description}
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
