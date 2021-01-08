import React from "react";

export const Project = (props) => {
    return (
        <div className="project-container">
            <a className="link" href="/">
                <h4 className="project-title">{props.title}</h4>
            </a>
            <p className="project-summary">{props.summary}</p>
        </div>
    );
};
