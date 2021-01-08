import React from "react";
import { StoryEntry } from "./StoryEntry";
import "../stylesheets/css/MyStory.css";

export const MyStory = () => {
    return (
        <div className="story-container">
            <StoryEntry content="I went to college at Rutgers University in New Brunswick New Jersey, where I received my bachelor's degree in Computer Science. I chose Computer Science as my major because of my love for video games and technology." />

            <StoryEntry content="After college, I spent three years as a Twitch streamer. I no longer pursue streaming full-time, but I enjoy developing tools for streamers as a hobby." />

            <StoryEntry content="My first professional work was with Blue Moon Analytics as a Front-End Developer. I converted their website into a serverless SPA using Clojure and re-frame. I built their blog to work without a back-end, and developed a pricing tool to calculate subscription costs." />

            <StoryEntry content="In late 2019, I was given another opportunity to work with Blue Moon Analytics as a Full-Stack Developer. I developed a web application and API using C# and ASP.NET Core for a Microsoft Excel COM add-in called LumiAero." />

            <StoryEntry content="I am currently looking for Software Development work either remotely or in the New York City area." />
        </div>
    );
};
