import React from "react";
import TitlePage from "../titlePage";
import "./flow.css";

function Flow() {
  return (
    <div className="page_container">
      <TitlePage
        title="Flow"
        subtitle="Integrations are effortless; adaptation is seamless. 
                  We streamline complex data into a fluid narrative that evolves as you do."
      />

      {/* STEP 1: A wrapper to hold the GIF + the positioned texts */}
      <div className="flow_wrapper">
        {/* The actual GIF replaces the old SVG */}
        <img
          src="static/videos/flowGif.gif"
          alt="Flow funnel"
          className="flow_image"
        />

        {/* STEP 2: The text lines that used to be baked into the SVG */}
        <p className="flow_text flow_text_top">
          Adjust campaigns on the fly, guided by live intelligence.
        </p>
        <p className="flow_text flow_text_left">
          Connect effortlessly with your existing platforms.
        </p>
        <p className="flow_text flow_text_right">
          Translate complexity into a single, continuous view.
        </p>
      </div>
    </div>
  );
}

export default Flow;
