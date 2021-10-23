import React from "react";
import { Link, withRouter } from "react-router-dom";

function RLogin(props) {
    
    return (
        <div className = "navigation">
            <div class = "nav-bar">
                <div class = "nav-buttons">
                    <li
                        id = "home"
                        class={`nav-item  ${
                        props.location.pathname === "/RRequests" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/RRequests">
                            DLogin not coded
                        </Link>
                    </li>
                </div>
                
            </div>
        </div>
    );
}

export default withRouter(RLogin);


