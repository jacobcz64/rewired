import React from "react";
import DLogin from "./DLogin";
import Navigation from "./Navigation";
import RLogin from "./RLogin";
function Login() {
  return (
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
  );
}

export default Login;