import React from "react";

export const VideoInfo = (props) => {
    return (
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
    );
};
