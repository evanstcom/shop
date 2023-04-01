import { ReactNode, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { IItem } from "./Types/data";
export const ShopContext = createContext<Partial<IAllProps>>({});

export interface IActiveSort {
    name: string;
    dir: string;
    sym: string;
    sort: string;
    param: string;
}
export interface IOrder {
    id?: string;
    name: string;
    image: string;
    price: number;
    description: string;
    size: string;
    quantity: number;
    brand: string;
    orderQuantity: number;
}

export interface IInitialStateProps {
    items: IItem[];
    loading: boolean;
    order: IOrder[];
    activeSort: IActiveSort,
    activeType: number;
    activeManuf: string[];
    userMinPrice: number;
    userMaxPrice: number;
}

interface IAllProps extends IInitialStateProps {
    addToBasket: any
    setItems: any
    /* addToBasket: (item: IOrder, quant: number) => {}
    setItems: (data: IItem[], min: number, max: number) => {} */
    removeFromBasket: any;
    clearBasket: any;
    incQuantity: any;
    decQuantity: any;
    setActiveSort: any;
    setActiveType: any;
    setActiveManuf: any;
    addItem: any;
    removeItem: any;
    setUserMinPrice: any;
    setUserMaxPrice: any;
}

interface Props {
    children?: ReactNode;
}

const initialState: IInitialStateProps = {
    items: [],
    loading: true,
    order: loadOrder() || [],
    activeSort: {
        name: "Цена",
        dir: "по убыванию",
        sym: "▼",
        sort: "price",
        param: "desc",
    },
    activeType: 0,
    activeManuf: [],
    userMinPrice: 0,
    userMaxPrice: 0,
};

function loadOrder() {
    if (localStorage.getItem("order"))
        return JSON.parse(localStorage.getItem("order") || '');
}

export const ContextProvider = ({ children }: Props) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.addToBasket = (item: IOrder, quant: number) => {
        dispatch({ type: "ADD_TO_BASKET", payload: { item, quant } });
    };
    value.removeFromBasket = (itemId: number) => {
        dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
    };
    value.clearBasket = () => {
        dispatch({ type: "CLEAR_BASKET" });
    };
    value.incQuantity = (itemId: number) => {
        dispatch({ type: "INC_QUANTITY", payload: { id: itemId } });
    };
    value.decQuantity = (itemId: number) => {
        dispatch({ type: "DEC_QUANTITY", payload: { id: itemId } });
    };
    value.setItems = (data: IItem[], min: number, max: number) => {
        dispatch({ type: "SET_ITEMS", payload: { data, min, max } });
    };
    value.setActiveSort = (data: IActiveSort) => {
        dispatch({ type: "SET_ACTIVE_SORT", payload: data });
    };
    value.setActiveType = (data: number) => {
        dispatch({ type: "SET_ACTIVE_TYPE", payload: data });
    };
    value.setActiveManuf = (item: string, status: boolean) => {
        dispatch({ type: "SET_ACTIVE_MANUF", payload: { item, status } });
    };
    value.addItem = (data: IOrder) => {
        dispatch({ type: "ADD_ITEM", payload: data });
    };
    value.removeItem = (itemId: number) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
    };
    value.setUserMinPrice = (min: number) => {
        dispatch({ type: "SET_MIN", payload: min });
    };
    value.setUserMaxPrice = (max: number) => {
        dispatch({ type: "SET_MAX", payload: max });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
