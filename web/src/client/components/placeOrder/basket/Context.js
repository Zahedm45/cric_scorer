import React from 'react';

const ContextOfBasket = React.createContext({
    foodProducts: [],
    totalPrice: 0,
    clearBasket() {
    },
    addProduct() {
    },
    removeProduct() {
    }
});

export default ContextOfBasket;
