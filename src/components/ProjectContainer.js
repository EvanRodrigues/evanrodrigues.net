import React from "react";

export const ProjectContainer = (props) => {
    return (
        <div
            className={`project-page-container ${
                props.type === "work" ? "work" : "project"
            }`}
        >
            {props.children}
        </div>
    );
};
