import React, { useContext, useState } from "react";
import { ShopContext } from "../../context";
import { BasketItem } from "./BasketItem";
import "./style.sass";
import { BasketPopup } from "./BasketPopup";



export const BasketList:React.FC= () => {
    const { order = [] } = useContext(ShopContext);
    const [isModal, setModal] = useState(false);

    return (
        <>
            <div className="basket">
                <div className="basket__list">
                    {order.map((el) => (
                        <BasketItem {...el} key={el.id} />
                    ))}
                </div>
                <div className="basket__complete">
                    <button
                        className="basket__btn_complete btn"
                        onClick={() => setModal(true)}
                    >
                        Оформить заказ
                    </button>
                    <h2 className="basket__total">
                        {order.reduce(
                            (acc, el) =>
                                (acc = acc + el.price * el.orderQuantity),
                            0
                        )}{" "}
                        ₸
                    </h2>
                </div>
            </div>
            {isModal ? (
                <BasketPopup isModal={isModal} setModal={setModal} />
            ) : null}
        </>
    );
};
