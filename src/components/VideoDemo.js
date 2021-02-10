import React from "react";

export const VideoDemo = (props) => {
    return (
        <div className="project-video-container">
            <h2 className="project-section-header">Video Demo</h2>
            <iframe
                title="demo video"
                src={props.video}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};
