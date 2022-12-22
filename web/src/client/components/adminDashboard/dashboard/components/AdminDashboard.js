import * as React from 'react';
import './AdminDashboard.css'
import SideBar from "./sidebar/sideBar"
import MainDash from "./mainDash/MainDash";
import {tokenStore} from "../../../../stores/TokenStore";

function AdminDashboard() {

    return (
        <div>
            {(tokenStore?.state === "loggedIn") ?
                <div className="dashBoard">
                    <SideBar/>
                    <MainDash/>
                </div>
                : <div> you need to log in first</div>
            }
        </div>
    )
}

export default AdminDashboard;