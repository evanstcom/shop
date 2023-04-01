import React, { useContext } from "react";
import { CatalogItem } from "./CatalogItem";
import { ShopContext } from "../../context";

import { IItem } from "../../Types/data";

export const CatalogList:React.FC = () => {
    const { items, activeManuf = [], userMinPrice = 0, userMaxPrice = 0 } = useContext(ShopContext);
    let filteredItems:IItem[] = []
    if (items && items.length){
        filteredItems = items.filter(el => el.price >= userMinPrice && el.price <= userMaxPrice);
    }
    if (activeManuf.length > 0){
        filteredItems = filteredItems.filter(el => activeManuf.includes(el.manufacturer));
    }

    return (
        <div className="catalog">
            {filteredItems.length > 0 ? filteredItems.map((item) => (
                <CatalogItem {...item} key={item.id} />
            )) : <h2>Нет товаров</h2>}
        </div>
    );
};
