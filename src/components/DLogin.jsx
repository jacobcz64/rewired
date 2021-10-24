import React from "react";
import { Link, withRouter } from "react-router-dom";

function DLogin(props) {
    
    return (
        <div className = "navigation">
            <div class = "nav-bar">
                <div class = "nav-buttons">
                    <li
                        id = "home"
                        class={`nav-item  ${
                        props.location.pathname === "/Listings" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Listings">
                            Donor
                        </Link>
                    </li>
                </div>
                
            </div>
        </div>
    );
}

export default withRouter(DLogin);


