import React from "react";
import Pay from "./Pay";


function PayWrapper(){
    // React hook
    const [buttonClicked, setButtonClicked] = React.useState(false);

    if (buttonClicked) {
        const customer = {
            name: "My Name",
            id: "orderId" + Math.random(),
            email: "unknownemail@gmail.com",
            amount: 100
        }
        return (
            <div>
                <Pay>{customer}</Pay>
            </div>
        );
    }

    return(
        <div>
            <h2>This is a temporary payment button</h2>
            <h2>Click the button to go to payment page.</h2>

            <form onSubmit={handleSubmit}>
                <button type="">Click here</button>
            </form>
        </div>
    );

    function handleSubmit() {
        setButtonClicked(true);
    }

}



export default PayWrapper;


// id: new Date().toLocaleTimeString("en-US"),