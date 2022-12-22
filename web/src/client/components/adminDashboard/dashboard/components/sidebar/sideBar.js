import './sideBar.css'
import {useState} from "react";

function SideBar(){

    const SidebarData = [
        {heading: "Dashboard"},
    ]

    const [selected, setSelected] = useState(0)
    return(
        <div className="Sidebar">
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div
                            className={selected === index ? "menuItem active" : "menuItem"}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <span>{item.heading}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SideBar;