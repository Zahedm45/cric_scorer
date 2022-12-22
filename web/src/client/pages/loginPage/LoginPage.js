//  login page. made using following tutoral https://contactmentor.com/login-form-react-js-code/
// utilizes usestates and a login form

import React, { useState } from "react";
import "./LoginPage.css";
import {tokenStore} from "../../stores/TokenStore";
import {Route} from "react-router-dom";

function LoginPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    //"https://localhost8080"
    //"https://food-webapp.grp2.diplomportal.dk"
    const [errorMessage, setErrorMessage] = useState({});
    const handleSubmit = async (event) => {
        //logging in
        event.preventDefault();
        const {uname, pass} = document.forms[0];

        try {
            let response = await fetch("https://food-webapp.grp2.diplomportal.dk/api/auth/login", {
                "headers" : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                "method": "POST",
                "body": JSON.stringify({
                    username: uname.value,
                    password: pass.value
                })
            })
            let status = response.status
            if (status === 200) {
                let token = await response.text()
                if (token !== '') {
                    console.log(token)
                    setIsSubmitted(true);
                    //setting tokenStore states, and saving token
                    tokenStore.setToken(token)
                    tokenStore.state = "loggedIn";
                    console.log(tokenStore.getToken())
                }
            }
            else {
                return ''
            }
        }
       catch (e){
           setErrorMessage({name: "invalid name or password"});
           renderErrorMessage()
       }

    };

    const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    //login form
    const renderForm = (
        <div className="form">
            <div className="title">Sign In</div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>

        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                {isSubmitted ? <div>logged in</div> : renderForm}
            </div>
        </div>
    );
}
export default LoginPage;