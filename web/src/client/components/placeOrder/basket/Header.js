import React, {useContext} from 'react';
import css from './Style.module.css';
import ContextOfBasket from "./Context";

const BasketButtonHeader = (props) => {
    const contextOfBasket = useContext(ContextOfBasket),
        amountBasketProducts = contextOfBasket.foodProducts.reduce((curNumber, item) => {
            return (curNumber + item.amount);
        }, 0);
    return (
        <button className={css.buttonH} onClick={props.onClick}>
            <span>Basket</span>
            <span className={css.amountShowing}> {amountBasketProducts} </span>
        </button>
    )
};

const Header = (props) => {
  return (
    <>
      <header className={css.header}>
         <h1></h1>
       <BasketButtonHeader onClick={props.onOpen} />
      </header>
    </> 
  )
};

export default Header;