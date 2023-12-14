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
            Next big thing on solana network. Get ready to dwell in the World full of HIPHOP. Music, celebrities, ideas, talent, competition, passion you name it. That’s where we all come together that’s where you want to be. Join our community today.
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
