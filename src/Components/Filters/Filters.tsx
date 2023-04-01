import React, { useContext, useState } from "react";
import { ShopContext } from "../../context";
import { IoSearchOutline } from "react-icons/io5";
import "./style.sass";

export const Filters = () => {
    const {
        items = [],
        setActiveType,
        setActiveManuf,
        activeManuf = [],
        activeType = 0,
        userMinPrice = 0,
        userMaxPrice = 0,
        setUserMinPrice,
        setUserMaxPrice,
    } = useContext(ShopContext);
    const [search, setSearch] = useState("");
    const [showParam, setShowParam] = useState(false);
    let minPriceItems = Math.min(...items.map((el) => el.price));
    let maxPriceItems = Math.max(...items.map((el) => el.price));
    let manuf = items.map((item) => item.manufacturer).sort();
    manuf = Array.from(new Set(manuf)).filter((el) =>
        el.toLowerCase().includes(search.toLowerCase().trim())
    );
    const type = [
        {
            name: "Все категории",
            type: 0,
        },
        {
            name: "Уход за телом",
            type: 1,
        },
        {
            name: "Уход за руками",
            type: 2,
        },
    ];
    return (
        <aside className="filters">
            <div className="filters__top">
                <h4 className="filters__title">Подбор по параметрам</h4>
                <div
                    className="filters__mobile"
                    onClick={() => setShowParam(!showParam)}
                >
                    {showParam ? (
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 5L5 1L1 5" stroke="#3F4E65" />
                        </svg>
                    ) : (
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 1L5 5L9 1" stroke="#3F4E65" />
                        </svg>
                    )}
                </div>
            </div>
            <div className={!showParam ? "desktop" : ""}>
                <div className="filters__price">
                    <h4 className="filters__price-title">
                        Цена <span>₸</span>{" "}
                    </h4>
                    <div className="filters__price-area">
                        <input
                            onChange={(e) => {
                                if (+e.target.value < 0) {
                                    setUserMinPrice(0);
                                } else if (+e.target.value > userMaxPrice) {
                                    setUserMinPrice(userMaxPrice);
                                } else if (+e.target.value < minPriceItems) {
                                    setUserMinPrice(minPriceItems);
                                } else {
                                    setUserMinPrice(e.target.value);
                                }
                            }}
                            value={userMinPrice || 0}
                            type="number"
                        />
                        <span> &nbsp; - &nbsp;</span>
                        <input
                            type="number"
                            onChange={(e) => {
                                if (+e.target.value > maxPriceItems) {
                                    setUserMaxPrice(maxPriceItems);
                                } else if (+e.target.value < userMinPrice) {
                                    setUserMaxPrice(userMinPrice);
                                } else {
                                    setUserMaxPrice(e.target.value);
                                }
                            }}
                            value={userMaxPrice || 0}
                        />
                    </div>
                </div>
            </div>
            <div className={!showParam ? "desktop" : ""}>
                <h4 className="filters__subtitle">Производитель</h4>
                <div className="filters__search input__block">
                    <input
                        className="input__area"
                        type="search"
                        placeholder="Поиск..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="input__btn">
                        <span>
                            <IoSearchOutline />
                        </span>
                    </button>
                </div>
                <div className="filters__maker">
                    {manuf.map((item, i) => (
                        <label key={i}>
                            <input
                                onChange={(e) =>
                                    setActiveManuf(item, e.target.checked)
                                }
                                type="checkbox"
                                checked={
                                    activeManuf.includes(item) ? true : false
                                }
                            />
                            <h4>{item}</h4>
                        </label>
                    ))}
                </div>
            </div>
            <div className="main-section__categories">
                <ul className="filters__categories">
                    {type.map((el, i) => (
                        <li
                            onClick={() => setActiveType(el.type)}
                            key={i}
                            className={
                                activeType === el.type
                                    ? "filters__subtitle filters__category filters__category_active"
                                    : "filters__subtitle filters__category"
                            }
                        >
                            {el.name}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};
