import React from "react";
import { Link } from "react-router-dom";
interface Props {
    crumb: string;
    name: string;
}
export const Crumbs:React.FC<Props> = ({crumb, name}) => {
    return (
        <>
            {crumb === "" ? (
                <li className="bread__item">
                    <Link to={`/${crumb}`} className="bread__link">Главная</Link>
                </li>
            ) : crumb === "catalog" ? (
                <li className="bread__item">
                    <Link to={`/${crumb}`} className="bread__link">Каталог</Link>
                </li>
            ) : crumb === "cart" ? (
              <li className="bread__item">
                  <Link to={`/${crumb}`} className="bread__link">Корзина</Link>
              </li>
          ) :(
                <li className="bread__item">
                    <h4 className="bread__link">{name}</h4>
                </li>
            )}
        </>
    );
};
