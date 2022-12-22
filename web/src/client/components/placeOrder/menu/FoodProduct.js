import React from 'react'
import { useContext } from 'react';
import css from './Style.module.css';
import ContextOfBasket from '../basket/Context';
const FoodProductAmount = (props) => {

    function sendRequest(event) {
        event.preventDefault();
        /*You're only able to add one dish at a time.*/
        props.onAddToCart(1);
    }

    return (
        <>
            <form className={css.form} onSubmit={sendRequest}>
                <button>Add To Basket</button>
            </form>
        </>
    )
}
const FoodProduct = (props) => {

  const contextOfBasket = useContext(ContextOfBasket);
  const price = `${props.price.toFixed(2)}`;
  const appending = "appending";

  const addToBasket = (amount) => {
      /*Only one foodtype can be added.*/
      if(contextOfBasket.foodProducts <= 0) {
          contextOfBasket.addProduct({
              id: props.id,
              menu: props.menu,
              price: props.price,
              amount: amount,
              status: appending
          });
      }
  };
  
  return (
    <>
     <li className={css.foodProduct}>
      <div>
       <h2> {props.menu} </h2>
       <div> {props.info} </div>
       <>{"\u00a0"}
       </>
       <>{"\u00a0"}
       <div className={css.price}> {price} DKK</div>
       </>
      </div>
         <div><FoodProductAmount onAddToCart={addToBasket} /></div>
    </li>
    </>
  )
}

export default FoodProduct;