import React from "react";
import DNavigation from "./DNavigation";
import Microsoft from "./files/microsoft.png";

function DMakeListing() {
  return (
    <>
    <DNavigation />
    <div className="">
      <p className="page-title">DONOR PROFILE</p>
      <div id="donor-box">
        <div id="donor-text">
        Team: Microsoft- Headquarters
        <br/>
        Location: <span class="underlined">Redmond, Washington</span>
        <br/>
        <br/>
        Donor Representative: <span class="underlined">John Doe</span>
        <br/>
        Representative Email: <span class="underlined">jdoe@microsoft.com</span>
        <br/>
        <br/>
        Total Donations Made: 20
        <br/>
        <br/>
        Recipients Donated To:
        <br/>
        <span class="underlined"><li>Roots Young Adult Center (Seattle, WA)</li></span>
        
  
        </div>
        <div id></div>
        <img
              id="microsoft"
              src={Microsoft}
              alt=""
            />
      </div>
    </div>
    </>
  );
}

export default DMakeListing;