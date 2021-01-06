import React from "react";

export const HomeSection = (props) => {
    return (
        <div id={props.id}>
            <div className="info-container">{props.children}</div>
        </div>
    );
};
