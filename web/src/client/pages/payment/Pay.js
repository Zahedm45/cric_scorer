import React from "react";
import StripeCheckout from "react-stripe-checkout";

let data;
function Pay(props) {
    data = props.children
    return (
        <div>
            <h1></h1>
            <StripeCheckout
                token={handleToken}
                stripeKey={"pk_test_51Ll7jrJEhBAUpm4shjFR2nezg1jK24pK7XdcovE" +
                    "OeogK4m2HZDdsQITlPVeXromKZoZjHrJO8iWlKhkrDyuOXy8Q00Fv9OdcdE"}
                billingAddress={false}
                shippingAddress={false}
                email={props.children.email}
                amount={props.children.amount * 100}
                currency={"DKK"}
                name={props.children.name}
            />
        </div>
    );
}

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

const handleToken = (token) => {
    if (data.amount < 3) return alert("Amount must be at least 3kr.")
    fetch(baseUrl + "api/stripe/pay", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            email: data.email,
            name: data.name,
            customerId: data.id,
            amount: data.amount,
            tokenId: token.id
        }),
        // fetch sends 1st party cookies to only its own server.
        credentials: "same-origin"
    }).then(function(response) {
        if (response.ok) alert('Payment success')
        else alert('Payment failed')
        console.log(response)
        return response.text()
    }, function(error) {
        alert('Payment failed')
        console.log(error.message);
    })
}





export default Pay;
//export default observer(Pay)
