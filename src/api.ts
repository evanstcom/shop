import { IChangeData } from "./Components/Admin/AdminItem";
import { ICreateItem } from "./Types/data";
import { API_URL } from "./config";
import { IActiveSort } from "./context";

const getItem = async (id:string) => {
    const response = await fetch(API_URL + `/${id}`);
    return await response.json();
};

const getAllFilterItems = async (activeSort:IActiveSort, activeType:number, page:number) => {
        const url = new URL(API_URL);
        if (activeType === 0) {
            url.searchParams.append("type", '');
        } else {
            url.searchParams.append("type", `${activeType}`);
        }
        url.searchParams.append("sortBy", activeSort.sort);
        url.searchParams.append("order", activeSort.param);
        const response = await fetch(url + `&page=${page}&limit=6`);
        return await response.json();
};
const getAllItems = async () => {
        const response = await fetch(API_URL);
        return await response.json();
};
const saveItem = async (item:IChangeData, id:string) => {
    await fetch(API_URL + `/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
};
const createItem = async (item:ICreateItem) => {
    const newItem = {...item};
    delete newItem.id;
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });

    const data = await response.json();
    return data.id;
};

const deleteItem = async (id:string) => {
    await fetch(API_URL + `/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export { getAllItems, getItem, saveItem, createItem, deleteItem, getAllFilterItems };
