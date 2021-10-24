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
                        props.location.pathname === "/Requests" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Requests">
                            Requests
                        </Link>
                    </li>

                    <li
                        id = "RHistory"
                        class={`nav-item  ${
                        props.location.pathname === "/Rhistory" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Rhistory">
                            History
                        </Link>
                    </li>
                    
                    <li
                        id = "resume"
                        class={`nav-item  ${
                        props.location.pathname === "/makerequests" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/makerequests">
                            Make a request
                        </Link>
                    </li>



                </div>
                
            </div>
        </div>
    );
}

export default withRouter(Navigation);


