//  login page. made using following tutoral https://contactmentor.com/login-form-react-js-code/
// utilizes usestates and a login form
import ShareLink from 'react-facebook-share-link'
import React, { useState } from "react";

import "./ContactPage.css";
import {Button} from "@mui/material";

function ContactPage() {
    return (
        <div >
            <h1 id = "Main">Du kan dele vores hjemmeside på facebook!</h1>
            <ShareLink>
                {link => (
                    <a href={link} target='_blank'>Del på facebook</a>
                )}
            </ShareLink>
            <h1 id = "Main">eller gå til vores facebook sidde (findes ikke rigtigt)</h1>
            {/* 👇️ Anchor link */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Button>Gå to facebook!</Button>
            </a>

        </div>
    );
}
export default ContactPage;