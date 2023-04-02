import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Crumbs } from "./Crumbs";
import './style.sass';
interface Props {
    name: string;
}
export const BreadCrumbs: React.FC<Props> = ({ name }) => {
    const path = Array.from(useLocation().pathname.split("/"));
    const navigate = useNavigate();
    return (
        <>
            <nav className="bread">
                <ul className="bread__list">
                    {path.map((crumb, index) => {
                        return <Crumbs crumb={crumb} name={name} key={index} />;
                    })}
                </ul>
                <div className="back">
                    <span className="back__svg"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L1 5L5 9" stroke="#3F4E65" />
                    </svg>
                    </span>
                    <h4 className="back__title" onClick={() => navigate(-1)}>Назад</h4>
                </div>
            </nav>
        </>
    );
};
