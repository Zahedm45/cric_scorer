import {Link} from "react-router-dom";
import './NavigationBar.css';
import React from "react";
import image from '../../../assets/header/logotext.png';

function NavigationBar() {
    return(
        <div style={{ backgroundColor: "silver" }}>
            <div className="header">
                <Link to="/"><img src={image} height={200} width={1000}  alt={""}/></Link>
            </div>
        <nav>
            <div className="body">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/order">Place an Order</Link>
                </li>
                {/* <li>
                    <Link to="/form">CustomerForm</Link>
                </li>*/}
{/*                <li>
                    <Link to="/pay2">Pay2</Link>
                </li>*/}
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default NavigationBar;