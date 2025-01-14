import React, { useEffect, useRef, useState } from "react";
import TitlePage from "../titlePage";
import "./vision.css";

function Vision({ isActive }) {
  const videoRef = useRef(null);

  // State for controlling the text
  const [showText, setShowText] = useState(false);
  // State for controlling push-down animation
  const [pushDown, setPushDown] = useState(false);

  useEffect(() => {
    let pushTimer;
    let textTimer;

    if (isActive) {
      // Reset everything
      setShowText(false);
      setPushDown(false);

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }

      // 1) Push down the wrapper a bit before the text appears, e.g. at 5 seconds
      pushTimer = setTimeout(() => {
        setPushDown(true);
      }, 5000);

      // 2) Then show text at 6 seconds
      textTimer = setTimeout(() => {
        setShowText(true);
      }, 6000);
    } else {
      // If user leaves the tab, pause the video and clear timeouts
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
          `second_video_background_wrapper ` + (pushDown ? "pushed" : "")
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
