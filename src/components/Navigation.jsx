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
                        props.location.pathname === "/" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/">
                            RRequests
                        </Link>
                    </li>

                    <li
                        id = "RHistory"
                        class={`nav-item  ${
                        props.location.pathname === "/history" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/history">
                            history
                        </Link>
                    </li>
                    
                    <li
                        id = "resume"
                        class={`nav-item  ${
                        props.location.pathname === "/makerequests" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/makerequests">
                            makerequests
                        </Link>
                    </li>



                </div>
                
            </div>
        </div>
    );
}

export default withRouter(Navigation);


