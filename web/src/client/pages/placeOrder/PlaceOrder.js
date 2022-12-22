import React, { useState } from "react";
import './Style.module.css';
import Header from '../../components/placeOrder/basket/Header';
import BuyableFoodProducts from '../../components/placeOrder/menu/BuyableFoodProducts';
import Basket from '../../components/placeOrder/basket/Basket';
import BasketProvider from '../../components/placeOrder/basket/BasketProvider';
import Layout from "../../components/placeOrder/layout/Layout";
import css from "../../components/placeOrder/menu/Style.module.css";

const PlaceOrder = () => {

    const [basketController, setBasketController] = useState(false);

    const openBasketController = () => {
        setBasketController(true);
    }
    const closeBasketController = () => {
        setBasketController(false);
    }

    return (
        <BasketProvider>
            {basketController && <Basket onClose={closeBasketController} />}
            <Header onOpen={openBasketController} />
            <section className={css.foodProducts}>
            <Layout>
                <center>
                    <h2>The Homepage is Under Development</h2>
                    The website is still under development, so there may be some features that will not work, or rather are not implemented.
                    <div>
                        <u>Currently you can only add one dish at a time.</u>
                    </div>
                    Thank you for your understanding, happy ordering!
                </center>
            </Layout>
                </section>
            <main>
                <BuyableFoodProducts />
            </main>
        </BasketProvider>
    )
};

export default PlaceOrder;
