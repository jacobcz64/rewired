import React from "react";
import { Link, withRouter } from "react-router-dom";

function RLogin(props) {
    
    return (

                    <div
                
                        class="login"
                    >
                        <Link class="login-button" to="/Requests">
                            Login
                        </Link>
                    </div>

                
    );
}

export default withRouter(RLogin);


