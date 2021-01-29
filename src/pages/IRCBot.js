import React from "react";
import { ProjectContainer } from "../components/ProjectContainer";
import { Project } from "../components/Project";

export const IRCBot = () => {
    return (
        <ProjectContainer type="project">
            <Project
                title="IRC Bot"
                type="project"
                description="An IRC chat bot used for twitch.tv. The bot manages user data, raffles, in-channel currency distribution, song requests, and games. Currently the bot is designed specifically for me, but in the future I would like to make it open for public use."
                video="https://www.youtube.com/embed/eu4gJ6U1ovU"
                live="none"
                github="https://github.com/EvanRodrigues/IRCbot"
                languages={["Python", "pip", "Twitch IRC", "OAuth"]}
                timestamps={[
                    "0:00 - Intro",
                    "1:03 - Custom Commands",
                    "1:51 - Auto Points",
                    "3:03 - Missions",
                    "5:24 - Raffles",
                    "7:36 - Quote System",
                ]}
            />
        </ProjectContainer>
    );
};
