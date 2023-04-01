import React, {useContext} from 'react';
import { ShopContext } from '../context';
import { BasketList } from "../Components/Basket/BasketList";
import { BreadCrumbs } from "../Components/Breadcrumbs/BreadCrumbs";

export const Cart = () => {
  const { order = [] } = useContext(ShopContext);
    return (
        <section className="main-section container">
            <BreadCrumbs name={''}/>
            <h1
                className="main-section__title"
                style={{
                    paddingBottom: "50px",
                    marginBottom: "50px",
                    borderBottom: "1px dashed rgba(63, 78, 101, 0.1)",
                }}
            >
                Корзина
            </h1>
            {
              order.length ? <BasketList /> : <h2 style={{marginBottom: '50px'}}>Корзина пуста</h2>
            }
            
        </section>
    );
};
