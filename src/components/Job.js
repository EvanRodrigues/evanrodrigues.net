import React from "react";

export const Job = (props) => {
    return (
        <div className="work-container">
            <a class="work-link" href="/">
                <h4 className="work-title">{props.title}</h4>
            </a>

            <span className="work-date">{props.date}</span>
            <p className="work-summary">{props.summary}</p>
        </div>
    );
};
