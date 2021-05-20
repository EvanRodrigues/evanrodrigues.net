import React from "react";

export const HomeSection = (props) => {
    if (props.title == null) {
        return (
            <div id={props.id} className="home-section">
                <div className="info-container">{props.children}</div>
            </div>
        );
    }
    return (
        <div id={props.id} className="home-section">
            <div className={`info-container ${props.contact}`}>
                <div className="header-container">
                    <h1 className="section-header">{props.title}</h1>
                </div>
                {props.children}
            </div>
        </div>
    );
};
