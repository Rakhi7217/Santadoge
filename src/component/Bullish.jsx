import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const data = [
  {
    id: 1,
    detail: "Low Tax Token - buy and enjoy with community.",
  },
  {
    id: 2,
    detail: "Community-based token aiming for 1000x moonshot.",
  },
  {
    id: 3,
    detail: "Developed by SAFU and well- known developers.",
  },
  {
    id: 3,
    detail: "Extendabe LP lock period - will be decided by community votes .",
  },
];
const Bullish = () => {
  return (
    <div className="bulish">
      <legend> WE ARE BULISH</legend>
      <p> <hr /> </p>
      <h1> Community push & Strategic marketing</h1>
      <div className="bulish-sliderMain">
        {data.map((item, index) => (
          <div key={index} className="bulish-slider">
            <FaQuoteLeft className="bulish-icon"/> {item.detail}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bullish;
