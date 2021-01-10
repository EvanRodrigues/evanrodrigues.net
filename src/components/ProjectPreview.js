import React from "react";
import "../stylesheets/css/ProjectPage.css";

export const ProjectPreview = (props) => {
    return (
        <div className="project-container">
            <a className="link" href="/">
                <h4 className="project-title">{props.title}</h4>
            </a>
            <p className="project-summary">{props.summary}</p>
        </div>
    );
};
