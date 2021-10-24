import React from "react";
import { Link, withRouter } from "react-router-dom";

function DNavigation(props) {
    
    return (
        <div className = "navigation">
            <div class = "nav-bar">
                <div class = "nav-buttons">
                    <div
                        id = "Dfirst-item"
                        class={`nav-item  ${
                        props.location.pathname === "/Listings" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Listings">
                        Make a new donation
                        </Link>
                    </div>

                    <div
                        id = "Dmiddle-item"
                        class={`nav-item  ${
                        props.location.pathname === "/Dhistory" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/Dhistory">
                        view donation history
                        </Link>
                    </div>
                    
                    <div
                        id = "Dlast-item"
                        class={`nav-item  ${
                        props.location.pathname === "/makeListing" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/makeListing">
                            team profile
                        </Link>
                    </div>



                </div>
                
            </div>
        </div>
    );
}

export default withRouter(DNavigation);


