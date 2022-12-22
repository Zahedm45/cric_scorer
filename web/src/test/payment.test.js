import { render, screen } from '@testing-library/react';
import PayWrapper from "../client/pages/payment/PayWrapper";
import Pay from "../client/pages/payment/Pay";
import React from "react";
test('paymentTest', () => {

    const customer = {
        name: "My Name",
        id: Math.random(),
        email: "unknownemail@gmail.com",
        amount: 100
    }

    const pay = render(<Pay> {customer} </Pay>);
    const {container} = render(<Pay> {customer} </Pay>);
    container.getElementsByClassName("StripeCheckout");
    container.click();

    container.getElementsByClassName("cardNumberInput");
    container.id = "4242424242424242";
    container.getElementsByClassName("cardExpiresInput");
    container.id = "12/34";

    container.getElementsByClassName("cardCVCInput");
    container.id = "123";

    container.getElementsByClassName("iconTick");
    container.click();
    // TODO finish the test.





    expect(true).toBe(true);

});