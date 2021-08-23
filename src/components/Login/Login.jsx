import React from "react";

import "./Login.css"

export const Login = () => {
    return (
        <div class="login-container">
            <h1>Login</h1>
            <form method="post">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button type="Submit" id="login-button">login</button>
                <button type="Submit" id="reset-button">reset</button>
            </form>
        </div>
    )
}