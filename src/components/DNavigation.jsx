import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    
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
                            Listings
                        </Link>
                    </li>

                    <li
                        id = "RHistory"
                        class={`nav-item  ${
                        props.location.pathname === "/Dhistory" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Dhistory">
                            History
                        </Link>
                    </li>
                    
                    <li
                        id = "resume"
                        class={`nav-item  ${
                        props.location.pathname === "/makeListing" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/makeListing">
                            Make Listings
                        </Link>
                    </li>



                </div>
                
            </div>
        </div>
    );
}

export default withRouter(Navigation);


