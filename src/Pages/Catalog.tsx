import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context";
import { Categories } from "../Components/Catalog/Categories";
import { Sort } from "../Components/Catalog/Sort";
import { Filters } from "../Components/Filters/Filters";
import { BreadCrumbs } from "../Components/Breadcrumbs/BreadCrumbs";
import { getAllFilterItems } from "../api";
import { CatalogList } from "../Components/Catalog/CatalogList";
import { Pagination } from "../Components/Pagination/Pagination";
export const Catalog: React.FC = () => {
    window.scrollTo(0, 0);
    const { setItems, loading, activeSort = {
        name: "Цена",
        dir: "по убыванию",
        sym: "▼",
        sort: "price",
        param: "desc",
    }, activeType = 0 } =
        useContext(ShopContext);
    const [page, setPage] = useState<number>(1)
    useEffect(() => {
        getAllFilterItems(activeSort, activeType, page).then((data) => {
            let minPriceItems: number = data.length
                ? Math.min(...data.map((el: {
                    price: number
                }) => el.price))
                : 0;
            let maxPriceItems: number = data.length
                ? Math.max(...data.map((el: {
                    price: number
                }) => el.price))
                : 0;
            setItems(data, minPriceItems, maxPriceItems);
        });
        //eslint-disable-next-line
    }, [activeSort, activeType, page]);

    return (
        <div className="container main-section__container">
            <BreadCrumbs name={''} />
            <div className="main-section__top">
                <h1 className="main-section__title">Косметика и гигиена</h1>
                <Sort />
            </div>
            {loading ? (
                <h2 className="main-section">Загрузка...</h2>
            ) : (
                <>
                    <Categories />
                    <div className="main-section__catalog">
                        <Filters />
                        <CatalogList />
                    </div>
                </>
            )}
            <Pagination onChangePage={(num: number) => setPage(num)} />
        </div>
    );
};
