import React from "react";
import { ProjectPageLink } from "./ProjectPageLink";

export const ProjectHeader = (props) => {
    return (
        <>
            <div className="project-header-container">
                <h1 className="project-page-title">{props.title}</h1>
                <div className="link-container">
                    <ProjectPageLink live={props.live} />
                    <ProjectPageLink github={props.github} />
                </div>
            </div>

            <div className="project-description-container">
                <h2 className="project-section-header">Description</h2>
                <p className="project-description">{props.description}</p>
            </div>
        </>
    );
};
