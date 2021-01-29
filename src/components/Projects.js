import React from "react";
import { ProjectPreview } from "./ProjectPreview";
import "../stylesheets/css/Projects.css";

export const Projects = () => {
    return (
        <div className="portfolio-container">
            <ProjectPreview
                title="Song List"
                link="/song-list"
                summary="A site to display a collection of songs in a table. Songs are stored in a MySQL database. Users can order by category (descending or ascending), and can search through the table by title or artist."
            />

            <ProjectPreview
                title="Stream Tools"
                link="/stream-tools"
                summary="A platform to distribute my twitch.tv widgets to my friends to use. It's my first full stack personal project and is consistently being updated with new widgets and features."
            />

            <ProjectPreview
                title="Emote Combo Display"
                link="/emote-combo-display"
                summary="A widget for twitch.tv streamers that displays an emote on OBS and plays a sound if an emote is used enough in the chat room. The emote-combo-display has access to Twitch global, BetterTTV, and FrankerFaceZ emotes."
            />

            <ProjectPreview
                title="IRC Bot"
                link="/irc-bot"
                summary="An IRC chat bot used for twitch.tv. The bot manages user data, raffles, in-channel currency distribution, song requests, and games. Currently the bot is designed specifically for me, but in the future I would like to make it open for public use."
            />
        </div>
    );
};
