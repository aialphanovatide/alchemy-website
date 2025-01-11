import React from "react";
import TitlePage from "../titlePage";
import "./flow.css";

function Flow() {
  return (
    <div className="page_container">
      <TitlePage
        title="Flow"
        subtitle="Integrations are effortless; adaptation is seamless. We streamline complex data into a fluid narrative that evolves as you do."
      />
      <img src="static/images/Vector.svg" alt="" className="flow_container" />
    </div>
  );
}

export default Flow;
