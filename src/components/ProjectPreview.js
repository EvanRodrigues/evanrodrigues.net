import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/css/ProjectPage.css";

export const ProjectPreview = (props) => {
    return (
        <div className="project-container">
            <Link
                className="link"
                to={{
                    pathname: props.link,
                    state: { description: props.description },
                }}
            >
                <h4 className="project-title">{props.title}</h4>
            </Link>

            <p className="project-description">{props.description}</p>
        </div>
    );
};
