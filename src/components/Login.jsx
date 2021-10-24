import React from "react";
import DLogin from "./DLogin";
import Navigation from "./Navigation";
import RLogin from "./RLogin";
import BottomLeft from "./files/portalBottomLeft.png";
import TopRight from "./files/portalTopRight.png";
function Login() {
  return (
    <>
    <img
              id="portal-bottom-left"
              src={BottomLeft}
              alt=""
            />

<img
              id="portal-top-right"
              src={TopRight}
              alt=""
            />
    <div id="logo-space"> </div> 
    <div id="login-screen">
      <div class="logins">
        <div class="login-title">LOGIN AS RECIPIENT</div>
        <input class="login-inputs" type="text" placeholder="Username" />
        <input class="login-inputs" type="text" placeholder="Password" />
        <RLogin />  
      </div>
      <div class="vertical-line"> </div>
      <div class="logins">
        <div class="login-title">LOGIN AS DONOR</div>
        <input class="login-inputs" type="text" placeholder="Username" />
        <input class="login-inputs" type="text" placeholder="Password" />
        <DLogin />
      </div>
      
    </div>
    </>
  );
}

export default Login;