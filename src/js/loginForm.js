"use strict";

const loginForm = () => {
    return `<div>
                <fieldset>
                    <label>Username:</label>
                    <input type="text" id="username">
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <input type="password" id="password">
                </fieldset>
                <fieldset>
                    
                    <button id="login-btn">Log-In</button>
                </fieldset>
            </div>`

}

module.exports = loginForm;