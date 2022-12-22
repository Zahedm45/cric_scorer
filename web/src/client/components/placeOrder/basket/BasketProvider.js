import React, { useReducer } from 'react';
import ContextOfBasket from './Context';

const stateOfBasket = {
  foodProducts: [],
  totalPrice: 0
};

/*Add and remove function related to the basket.*/
const basketUpdater = (state, activity) => {
  if (activity.type !== 'add-product') {
    if (activity.type === 'remove-product') {
      /*BasketProducts are meant to be inside the basket.*/
      const IndexOfBasketProducts = state.foodProducts.findIndex(
          (item) => item.id === activity.id
      );
      const BasketProduct = state.foodProducts[IndexOfBasketProducts];
      const newTotalPrice = state.totalPrice - BasketProduct.price;
      let newBasketItems;

      if (BasketProduct.amount !== 1) {
        const newProduct = {...BasketProduct, amount: BasketProduct.amount - 1};
        newBasketItems = [...state.foodProducts];
        newBasketItems[IndexOfBasketProducts] = newProduct;
      } else {
        newBasketItems = state.foodProducts.filter(item => item.id !== activity.id);
      }
      return {
        foodProducts: newBasketItems,
        totalPrice: newTotalPrice
      };
    }
    return stateOfBasket;
  } else {
    const newTotalPrice = state.totalPrice + activity.item.price * activity.item.amount,
        BasketProductIndex = state.foodProducts.findIndex((item) => item.id === activity.item.id),
        BasketProduct = state.foodProducts[BasketProductIndex];
    let newBasketItems;

    if (!BasketProduct) {
      newBasketItems = state.foodProducts.concat(activity.item);
    } else {
      const newProduct = {
        ...BasketProduct,
        amount: BasketProduct.amount + activity.item.amount,
      };
      newBasketItems = [...state.foodProducts];
      newBasketItems[BasketProductIndex] = newProduct;
    }
    return {
      foodProducts: newBasketItems,
      totalPrice: newTotalPrice,
    };
  }
};

const BasketProvider = (props) => {
  const [basketState, sendBasketChanges] = useReducer(basketUpdater, stateOfBasket);

  /*Add function*/
  const addProductToBasket = (item) => {
    sendBasketChanges({type: 'add-product', item: item});
  };

  /*remove function*/
  const removeProductFromBasket = (id) => {
    sendBasketChanges({type: 'remove-product', id: id});
  };

  const clearBasket = () => {
    sendBasketChanges({type: 'clear'});
  }

  const contextOfBasket = {
    foodProducts: basketState.foodProducts,
    totalPrice: basketState.totalPrice,
    addProduct: addProductToBasket,
    removeProduct: removeProductFromBasket,
    clearBasket: clearBasket
  };

  return (
    <ContextOfBasket.Provider value={contextOfBasket}>
      {props.children}
    </ContextOfBasket.Provider>
  )
};

export default BasketProvider;
