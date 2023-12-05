import React from "react";
import santadoge from "../assets/sangtadoge.png";
import { PiRectangleThin } from "react-icons/pi";
function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <div className="home-left">
          <div>
            <h3 className="h3">Welcome to </h3>
            <h1 className="h1">SantaDoge</h1>
          </div>
          <p>
            The story of Santa Doge is connected to the largest holiday,
            Christmas, and Elon, the meme token's godfather.Santa Doge is
            arrived with lots of presents and rewards to make your Christmas
            happy
          </p>
{/*           <button className="navbar-button">Buy On Uniswap</button> */}
        </div>
        <div className="home-img">
          <img src={santadoge} alt="" />
        </div>
      </div>
      <div className="home-end-main">
        <div className="home-end">
          <PiRectangleThin className="home-icon" />
          <div>
            <h3>Community-driven</h3>
            <p>
              Project is made for community to enjoy and earn profits to the
              fullest.
            </p>
          </div>
        </div>
        <div className="home-end">
          <PiRectangleThin className="home-icon" />
          <div>
            <h3>Surprise</h3>
            <p>
              More surprises including raffles, competitions and shilling
              contests.
            </p>
          </div>
        </div>
        <div className="home-end">
          <PiRectangleThin className="home-icon" />
          <div>
            <h3>Organic push</h3>
            <p>
              Cultured calles and organic shills to push the project to higher
              price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
