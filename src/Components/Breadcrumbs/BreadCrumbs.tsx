import React from "react";
import { useLocation } from "react-router-dom";
import { Crumbs } from "./Crumbs";
import './style.sass';
interface Props {
    name: string;
}
export const BreadCrumbs:React.FC<Props> = ({name}) => {
    const path = Array.from(useLocation().pathname.split("/"));
    return (
        <nav className="bread">
            <ul className="bread__list">
                {path.map((crumb, index) => {
                    return <Crumbs crumb={crumb} name={name} key={index} />;
                })}
            </ul>
        </nav>
    );
};
