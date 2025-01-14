import React, { useRef } from "react";
import "./begin.css";

function Begin() {
  const videoRef = useRef(null);

  // When the video ends, jump to second 5 and play again.
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
      videoRef.current.play();
    }
  };

  return (
    <div className="page_container">
      <div className="begin_video_wrapper">
        <video
          ref={videoRef}
          src="/static/videos/contactCloud.mp4"
          autoPlay
          muted
          className="begin_background_video"
          onEnded={handleVideoEnd}
        />

        <div className="video_button_container">
          <a href="" className="demo_button">
            Book a Demo
          </a>
        </div>
      </div>

      <h2 className="title_begin">Begin</h2>
      <p className="subtitle_begin">Ready to think beyond the ordinary?</p>

      <div className="begin_container"></div>
    </div>
  );
}

export default Begin;
