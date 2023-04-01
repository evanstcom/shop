import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../../context";
import { getAllItems } from "../../api";
import { AdminItem } from "./AdminItem";
import { CreateItem } from "./CreateItem";
import { IoMdAddCircle } from "react-icons/io";
import "./style.sass";

export const AdminList = () => {
    const { setItems, loading, items } = useContext(ShopContext);
    const [isCreated, setIsCreated] = useState(false);
    useEffect(() => {
        getAllItems().then((data) => {
            setItems(data);
        });
         //eslint-disable-next-line
    }, []);
    if (!items) return <CreateItem setIsCreated={setIsCreated}/>
    return (
        <div className="admin__list">
            {isCreated ? (
                <CreateItem setIsCreated={setIsCreated}/>
            ) : (
                <div className="admin__create">
                    <span
                        className="admin__icon_create"
                        onClick={() => setIsCreated(true)}
                    >
                        <IoMdAddCircle className="admin__icon admin__icon_create" />
                    </span>
                </div>
            )}

            {loading ? (
                <h3>Загрузка...</h3>
            ) : (
                items.map((item) => <AdminItem {...item} key={item.id}/>)
            )}
        </div>
    );
};
