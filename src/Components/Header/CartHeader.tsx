import React, { useContext } from "react";
import { ShopContext } from "../../context";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const CartHeader = () => {
    const { order } = useContext(ShopContext);
    localStorage.setItem("order", JSON.stringify(order));
    return (
        <Link to="/cart">
            <div className="header__cart cart">
                <div className="cart__item">
                    <span className="cart__icon">
                        <IoCartOutline />
                    </span>
                    {order && order.length ? (
                        <div className="cart__count">
                            {order.reduce(
                                (acc, el) => (
                                    acc + el.orderQuantity
                                ), 0
                            )}
                        </div>
                    ) : null}
                </div>
                <div className="cart__info">
                    <h3 className="cart__name">Корзина</h3>
                    <h3 className="cart__price">
                        {order && order.reduce(
                            (acc, el) =>
                                (acc = acc + el.price * el.orderQuantity),
                            0
                        )} ₸
                    </h3>
                </div>
            </div>
        </Link>
    );
};
