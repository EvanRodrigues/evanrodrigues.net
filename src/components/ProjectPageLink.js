import React from "react";

export const ProjectPageLink = (props) => {
    if (props.live === "none" && !props.github) {
        return (
            <div className="button button-left button-none">
                no live version
            </div>
        );
    } else if (props.live !== "none" && !props.github) {
        return (
            <a href={props.live}>
                <div className="button button-left">live version</div>
            </a>
        );
    } else if (props.github === "none" && !props.live) {
        return (
            <div className="button button-right button-none">private code</div>
        );
    }

    return (
        <a href={props.github}>
            <div className="button button-right">github</div>
        </a>
    );
};
