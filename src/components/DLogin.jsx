import React from "react";
import { Link, withRouter } from "react-router-dom";

function DLogin(props) {
    
    return (


                    <div
                        class="login"
                    >
                        <Link class="login-button" to="/Listings">
                            Login
                        </Link>
                    </div>

                

    );
}

export default withRouter(DLogin);


