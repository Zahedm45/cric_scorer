
import "./MainDash.css"
import Orders from "../Orders/Orders";



function MainDash(){
    return(
        <>
            <div className="mainDash">
                <h1>Orders</h1>
                <Orders />
            </div>
        </>
    )
}

export default MainDash;