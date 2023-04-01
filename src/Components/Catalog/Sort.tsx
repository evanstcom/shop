import React, { useState, useContext } from "react";
import { ShopContext } from "../../context";

interface ISort {
    name: string,
    dir: string
    sym: string
    sort: string
    param: string
}

export const Sort: React.FC = () => {
    const { activeSort, setActiveSort } = useContext(ShopContext);
    const [showSort, setShowSort] = useState(false);
    const sort:ISort[] = [
        {
            name: "Цена",
            dir: "по убыванию",
            sym: "▼",
            sort: "price",
            param: "desc",
        },
        {
            name: "Цена",
            dir: "по возрастанию",
            sym: "▲",
            sort: "price",
            param: "asc",
        },
        {
            name: "Название",
            dir: "по убыванию",
            sym: "▼",
            sort: "name",
            param: "desc",
        },
        {
            name: "Название",
            dir: "по возрастанию",
            sym: "▲",
            sort: "name",
            param: "asc",
        },
    ];

    function sortChange(sort:ISort) {
        setShowSort(!showSort);
        setActiveSort(sort);
    }

    return (
        <div className="main-section__sort">
            <h3>
                Сортировка: &nbsp;
                <span onClick={() => setShowSort(!showSort)}>
                    {activeSort ? activeSort.name : ''} <span>{activeSort ? activeSort.sym: ''}</span>
                </span>
            </h3>
            {showSort ? (
                <div className="sort-popup">
                    <ul className="sort-popup__list">
                        {sort.map((el, i) => (
                            <li
                                key={i}
                                onClick={() => sortChange(sort[i])}
                                className="sort-popup__item"
                            >
                                {el.name} {el.dir}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
