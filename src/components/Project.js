import React from "react";
import { ProjectPageLink } from "./ProjectPageLink";

export const Project = (props) => {
    return (
        <div className="project-info">
            <a href="/">
                <div className="close">X</div>
            </a>
            <div className="project-content">
                <div className="project-header-container">
                    <h1 className="project-title">{props.title}</h1>
                    <div className="link-container">
                        <ProjectPageLink live={props.live} />
                        <ProjectPageLink github={props.github} />
                    </div>
                </div>

                <div className="project-description-container">
                    <h2 className="project-section-header">Description</h2>
                    <p className="project-description">{props.description}</p>
                </div>
                <div className="project-video-container">
                    <h2 className="project-section-header">Video Demo</h2>
                    <iframe
                        title="demo video"
                        src={props.video}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-info">
                    <div className="languages">
                        <h2 className="project-section-header">Tech Used</h2>
                        {props.languages.map((language) => {
                            return <span key={language}>{language}</span>;
                        })}
                    </div>
                    <div className="timestamps">
                        <h2 className="project-section-header">Timestamps</h2>
                        {props.timestamps.map((timestamp) => {
                            return <span key={timestamp}>{timestamp}</span>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
