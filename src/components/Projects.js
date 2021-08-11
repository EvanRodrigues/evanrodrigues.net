import React from "react";
import { ProjectPreview } from "./ProjectPreview";
import "../stylesheets/css/Projects.css";

export const Projects = () => {
    return (
        <div className="portfolio-container">
            <ProjectPreview
                title="Song List"
                link="/song-list"
                description="A site to display a collection of songs in a table. Songs are stored in a MySQL database. Users can order by category (descending or ascending), and can search through the table by title or artist."
            />

            <ProjectPreview
                title="Stream Tools"
                link="/stream-tools"
                description="A platform to customize and distribute twitch.tv widgets. The only widget included is a fundraising bar, but more will be added in the future."
            />

            <ProjectPreview
                title="Emote Combo Display"
                link="/emote-combo-display"
                description="A widget for twitch.tv streamers that displays an emote on OBS and plays a sound if an emote is used enough in the chat room. The application has access to Twitch global, BetterTTV, and FrankerFaceZ emotes."
            />

            <ProjectPreview
                title="IRC Bot"
                link="/irc-bot"
                description="An IRC chat bot used for twitch.tv. The bot manages user data, raffles, in-channel currency distribution, song requests, and games."
            />
        </div>
    );
};
