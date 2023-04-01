import React from "react";
import { AdminList } from "../Components/Admin/AdminList";

export const Adminka: React.FC = () => {
    return (
        <section className="main-section container">
            <h1
                className="main-section__title"
                style={{ marginBottom: "20px" }}
            >
                Админка
            </h1>
            <AdminList />
        </section>
    );
};
