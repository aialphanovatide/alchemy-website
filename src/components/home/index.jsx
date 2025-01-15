import React, { useRef, useState, useEffect } from "react";
import "./home.css";
import TitlePage from "../titlePage";

function Home() {
  const videoRef = useRef(null);
  const [showText, setShowText] = useState(false); // controls the text rendering

  const handleVideoPlay = () => {
    // After 4 seconds, show the text
    setTimeout(() => {
      setShowText(true);
    }, 6000);
  };

  const handleVideoEnded = () => {
    // This will pause the video and set currentTime to the end, effectively "freezing" on last frame
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = videoRef.current.duration;
    }
    setShowText(true); // show text once the video ends
  };

  return (
    <div className="page_container">
      {/* This div holds the background video in an absolutely positioned layer */}
      <div className="video_background_wrapper">
        <video
          ref={videoRef}
          src="/static/videos/alchemyMainVideoAnimationFirstPart.mp4"
          autoPlay
          muted
          playsInline
          webkit-playsinline
          onPlay={handleVideoPlay}
          className="background_video"
        />
      </div>

      <div className="home_container">
        {showText && (
          <TitlePage
            title="Where Marketing Meets Tomorrow"
            subtitle="Alchemy Strategies transforms data into direction, helping your brand stay steps ahead."
          />
        )}
      </div>
    </div>
  );
}

export default Home;
