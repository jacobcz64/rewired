import React from "react";
import Navigation from "./Navigation";
import Roots from "./files/roots.png";

function RMakeRequest() {
  return (
    <>
    <Navigation />
    <div className="">
      <p className="page-title">RECIPIENT PROFILE</p>
      <div id="donor-box">
        <div id="donor-text">
        Team: Roots Young Adult Shelter
        <br/>
        Location: <span class="underlined">Seattle, Washington</span>
        <br/>
        <br/>
        Donor Representative: <span class="underlined">Jane Smith</span>
        <br/>
        Representative Email: <span class="underlined">jsmith@roots.com</span>
        <br/>
        <br/>
        Team Description: 
Rising Out Of The Shadows
ROOTS provides emergency shelter, hot meals, and essential services for young adults ages 18-25. Join us to make a difference in a young people’s lives.
        <br/>
        <br/>
        
        Team Website: <span class="underlined">https://www.rootsinfo.org</span>
        <br/>
  
        </div>
        <div id></div>
        <img
              id="microsoft"
              src={Roots}
              alt=""
            />
      </div>
    </div>
    </>
  );
}

export default RMakeRequest;