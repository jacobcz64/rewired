import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    
    return (
        <div className = "navigation">
            <div class = "nav-bar">
                <div class = "nav-buttons">
                    <div
                        id = "first-item"
                        class={`nav-item  ${
                        props.location.pathname === "/Requests" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Requests">
                            Make a new donation
                        </Link>
                    </div>

                    <div
                        id = "middle-item"
                        class={`nav-item  ${
                        props.location.pathname === "/Rhistory" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Rhistory">
                            view donation history
                        </Link>
                    </div>
                    
                    <div
                        id = "last-item"
                        class={`nav-item  ${
                        props.location.pathname === "/makerequests" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/makerequests">
                            team profile
                        </Link>
                    </div>



                </div>
                
            </div>
        </div>
    );
}

export default withRouter(Navigation);


