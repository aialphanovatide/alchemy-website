import React from "react";
import "./tools.css";
import { useEffect, useRef } from "react";
import TitlePage from "../titlePage";
function Tools({ isActive }) {
  const gifRef = useRef(null);

  useEffect(() => {
    if (gifRef.current) {
      gifRef.current.src = isActive ? "static/images/toolsAnimation.gif" : "";
    }
  }, [isActive]);
  return (
    <div className="page_container">
      <TitlePage
        title="Tools"
        subtitle="Our AI Agents orchestrate every aspect of your marketing, from analytics to action—so you’re not just reacting, you’re shaping outcomes."
      />
      <img ref={gifRef} src="static/images/toolsAnimation.gif" alt="" />
      <p className={`first_begin ${isActive ? "active" : ""}`}>
        A dynamic dashboard powered by a swarm of intelligent agents.
      </p>
      <p className={`second_begin ${isActive ? "active" : ""}`}>
        {" "}
        Track key metrics in real time, then act on them automatically.
      </p>
      <p className={`third_begin ${isActive ? "active" : ""}`}>
        Move beyond static reports: let the system suggest—and
        implement—strategic moves.
      </p>
    </div>
  );
}

export default Tools;
