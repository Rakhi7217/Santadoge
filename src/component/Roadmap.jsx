import React from "react";
import { MdRectangle } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Roadmap = () => {
  return (
    <div className="roadmap-main">
      <div className="roadmap">
        <h3> ROADMAP ------</h3>
        <h1> Phase 1</h1>
        <p>
          Phase 1 - start of project proposal to the community through solid and
          organic markting push.
        </p>
        <ul>
          <li> <TiTick className="icon" /> Contract development </li>
          <li> <TiTick className="icon" /> Stealth launch</li>
          <li> <TiTick className="icon" /> Website Reveal </li>
          <li> <MdRectangle className="icon" /> Cultured calls & marketing push </li>
          <li > <MdRectangle className="icon" /> 50k Marketcap</li>
        </ul>
      </div>
      <div className="roadmap">
        <h3> ROADMAP ------</h3>
        <h1> Phase 2</h1>
        <p>
          Phase II - continuation of marketing push and solid partnership with
          well-known telegram callers and influencers{" "}
        </p>
        <ul>
          <li> <MdRectangle className="icon"/> Partnership </li>
          <li> <MdRectangle className="icon" /> Solid paid marketers </li>
          <li> <MdRectangle className="icon" /> Strategic advertisements </li>
          <li> <MdRectangle className="icon" /> CMC/CG Listings </li>
          <li> <MdRectangle className="icon" /> More to come...</li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
