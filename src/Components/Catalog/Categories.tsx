import { useContext } from "react";
import { ShopContext } from "../../context";
export const Categories = () => {
    const { activeType, setActiveType } = useContext(ShopContext);

    const type = [
        {
            name: 'Все категории',
            type: 0,
        },
        {
            name: 'Уход за телом',
            type: 1,
        },
        {
            name: 'Уход за руками',
            type: 2,
        },
]

    return (
        <div className="main-section__categories desktop">
            <ul className="category__list">
                {
                    type.map((el, i) => <li onClick={() => setActiveType(el.type)} key={i} className={el.type === activeType ? "category__item category__item_active" : "category__item"}>{el.name}</li>)
                }
            </ul>
        </div>
    );
};
