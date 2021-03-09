import React from "react";

export const VideoDemo = (props) => {
    return (
        <div className="project-video-container">
            <h2 className="project-section-header">Video Demo</h2>
            <div className="video-demo-container">
                <iframe
                    title="demo video"
                    className="video"
                    src={props.video}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};
