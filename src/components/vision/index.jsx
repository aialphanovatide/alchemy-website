import React, { useEffect, useRef, useState } from "react";
import TitlePage from "../titlePage";
import "./vision.css";

// This ref won't reset between tabs,
// but will reset if the page is fully reloaded.
function Vision({ isActive }) {
  const videoRef = useRef(null);

  // This ref tracks whether we have already played the animation once
  const hasVisitedRef = useRef(false);

  // Same as before
  const [showText, setShowText] = useState(false);
  const [pushDown, setPushDown] = useState(false);

  useEffect(() => {
    let pushTimer;
    let textTimer;

    if (isActive) {
      // If we haven't run the animation yet, do it now
      if (!hasVisitedRef.current) {
        hasVisitedRef.current = true; // mark as “visited” so we never repeat
        setShowText(false);
        setPushDown(false);

        // Start video from the beginning
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }

        // 1) Push down at 5s
        pushTimer = setTimeout(() => {
          setPushDown(true);
        }, 5000);

        // 2) Reveal text at 6s, freeze video at last frame
        textTimer = setTimeout(() => {
          setShowText(true);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = videoRef.current.duration;
          }
        }, 6000);
      } else {
        // If we already visited before, skip the animation
        // Just set everything to the “final” state
        setShowText(true);
        setPushDown(true);

        // Freeze video at last frame
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = videoRef.current.duration;
        }
      }
    } else {
      // Leaving the Vision tab: pause the video if it's still playing
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      clearTimeout(pushTimer);
      clearTimeout(textTimer);
    };
  }, [isActive]);

  return (
    <div className="page_container">
      <div
        className={
          "second_video_background_wrapper " + (pushDown ? "pushed" : "")
        }
      >
        <video
          ref={videoRef}
          src="/static/videos/alchemyMainVideoAnimationSecondPart.mp4"
          muted
          className="background_video"
        />
        {showText && (
          <div className="vision_texts_container">
            <p className="vision_text vision_text_1">
              Identify underlying trends before they surface.
            </p>
            <p className="vision_text vision_text_2">
              Guide your brand with insights that feel intuitive, not forced.
            </p>
            <p className="vision_text vision_text_3">
              Turn raw signals into strategic clarity.
            </p>
          </div>
        )}
      </div>

      {/* Conditionally render TitlePage after showText is true */}
      {showText && (
        <TitlePage
          title="Vision"
          subtitle="See what others miss. We decode the subtle patterns that drive your audience,
                    giving you a vantage point on what’s next."
        />
      )}

      <div className="vision_container"></div>
    </div>
  );
}

export default Vision;
