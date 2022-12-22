import React, { useState, useEffect } from 'react';
import css from './Style.module.css';
import Layout from '../layout/Layout';
import FoodProduct from './FoodProduct';
import Food from './Food.json';

const BuyableFoodProducts = () => {
  const [Foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const loadFoodProducts = async() => {
          const response = await Food;
          const foodProducts = await response;
          const fetchedFoodProducts = [];

          for (const key in foodProducts) {
              fetchedFoodProducts.push({
                  id: key,
                  menu: foodProducts[key].menu,
                  info: foodProducts[key].info,
                  price: foodProducts[key].price,
              });
        }
        setFoods(fetchedFoodProducts);
        setIsLoading(false);
      }
      loadFoodProducts(); //shows the food in ui.
      console.log(Food); //shows on the console
    }, []);

    const listOfFood = Foods.map((val) => {
        return (
            <FoodProduct
                id={val.id}
                key={val.id}
                menu={val.menu}
                info={val.info}
                price={val.price}
            />
        );
    });

    return (
        <>
          <section className={css.foodProducts}>
            <Layout>
              {isLoading ? <div className={css.loading}><p>Loading...</p></div> : <ul>{listOfFood}</ul>}
            </Layout>
          </section>
        </>
    )
  }

export default BuyableFoodProducts;