import React from "react";
import { StoryEntry } from "./StoryEntry";
import "../stylesheets/css/MyStory.css";

export const MyStory = () => {
    return (
        <div className="portfolio-container">
            <StoryEntry content="I went to college at Rutgers University in New Brunswick New Jersey where I received my bachelor's degree in Computer Science. I chose Computer Science as my major because of my love for video games and technology." />

            <StoryEntry content="After college, I spent some time pursuing full-time Twitch streaming.  Although I saw success as a streamer, I ultimately decided to focus on Software Engineering. In my free time, I still enjoy developing applications for streamers." />

            <StoryEntry content="My first professional work was with Blue Moon Analytics as a Front-End Developer. I converted their website into a serverless single page application using Clojure and re-frame. I built added a new blog to the website and developed a pricing tool to calculate subscription costs." />

            <StoryEntry content="In late 2019, I was given another opportunity to work with Blue Moon Analytics as a Full-Stack Developer. I developed a web application using C# and ASP.NET Core to manage data for a Microsoft Excel COM add-in called LumiAero." />

            <StoryEntry content="I am currently looking for Software Engineering work either remotely or in the New York City area." />
        </div>
    );
};
