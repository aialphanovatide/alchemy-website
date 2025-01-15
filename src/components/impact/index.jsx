import React, { useEffect, useRef, useState } from "react";
import TitlePage from "../titlePage";
import "./impact.css";

function Impact({ isActive }) {
  const videoRef = useRef(null);
  const hasVisitedRef = useRef(false);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let pushTimer;
    let textTimer;

    if (isActive) {
      // If we haven't run the animation yet, do it now
      if (!hasVisitedRef.current) {
        hasVisitedRef.current = true; // mark as “visited” so we never repeat
        setShowText(false);

        // Start video from the beginning
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }

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

        // Freeze video at last frame
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = videoRef.current.duration;
        }
      }
    } else {
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
      <div className={"third_video_background_wrapper "}>
        <video
          ref={videoRef}
          src="/static/videos/impactGif.mp4"
          muted
          autoPlay
          playsInline
          webkit-playsinline
          className="background_video_impact"
        />
        {showText && (
          <div className="impact_texts_container">
            <p className="impact_text impact_text_1">
              Retailers fine-tune product launches for maximum impact.
            </p>
            <p className="impact_text impact_text_2">
              B2B firms reach key decision-makers with precision.{" "}
            </p>
            <p className="impact_text impact_text_3">
              Financial services guide their clients with data-driven clarity.{" "}
            </p>
          </div>
        )}
      </div>

      {showText && (
        <TitlePage
          title="Impact"
          subtitle="Integrations are effortless; adaptation is seamless. We streamline complex data into a fluid narrative that evolves as you do."
        />
      )}

      <div className="impact_container"></div>
    </div>
  );
}

export default Impact;
