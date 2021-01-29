import React from "react";
import { ProjectContainer } from "../components/ProjectContainer";
import { Project } from "../components/Project";

export const EmoteComboDisplay = () => {
    return (
        <ProjectContainer type="project">
            <Project
                title="Emote Combo Display"
                type="project"
                description="A widget for twitch.tv streamers that displays an emote on OBS and plays a sound if an emote is used enough in the chat room. The emote-combo-display has access to Twitch global, BetterTTV, and FrankerFaceZ emotes."
                video="https://www.youtube.com/embed/VoaBkD51FXc"
                live="none"
                github="https://github.com/EvanRodrigues/emote-combo-display"
                languages={["JavaScript", "HTML", "CSS"]}
                timestamps={[
                    "0:00 - Intro",
                    "0:47 - Technologies Used",
                    "1:06 - How it Works",
                    "2:50 - Emote Displayed",
                    "3:40 - Managing Combos",
                    "7:09 - Managing Settings",
                ]}
            />
        </ProjectContainer>
    );
};
