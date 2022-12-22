import css from './Style.module.css';

const BasketProduct = (props) => {
    /*Price displaying with 2 decimalnumbers.*/
    let price = `${props.price.toFixed(2)}`;

    return (
    <li className={css['basket-product']}>
      <div>
        <h2>{props.menu}</h2>
        <div>
          <span className={css.text}>{props.price} DKK</span>
          <span className={css.text}> x {props.amount}</span>
        </div>
      </div>
      <div>
        <button onClick={props.minusOneAmount}>-</button>
        <button onClick={props.plusOneAmount}>+</button>
      </div>
    </li>
  );
};

export default BasketProduct;
