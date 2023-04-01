import { IInitialStateProps } from "./context";

export const reducer = (state: IInitialStateProps, { type, payload }: any): any => {
    switch (type) {
        case "ADD_ITEM":
            const newItem = [...state.items, payload];
            return {
                ...state,
                items: newItem,
            };
        case "REMOVE_ITEM":
            const removeItem = state.items.filter((el) => el.id !== payload.id);
            return {
                ...state,
                items: removeItem,
            };
        case "SET_ITEMS":
            return {
                ...state,
                items: payload.data || [],
                loading: false,
                userMaxPrice: payload.max,
                userMinPrice: payload.min
            };
        case "SET_MIN":
            return {
                ...state,
                userMinPrice: payload,
            };
        case "SET_MAX":
            return {
                ...state,
                userMaxPrice: payload,
            };
        case "SET_ACTIVE_MANUF":
            let newActiveManuf = null;
            if (payload.status) {
                newActiveManuf = [...state.activeManuf, payload.item];
                return {
                    ...state,
                    activeManuf: newActiveManuf,
                };
            } else {
                newActiveManuf = state.activeManuf.filter(
                    (el) => el !== payload.item
                );
                return {
                    ...state,
                    activeManuf: newActiveManuf,
                };
            }
        case "SET_ACTIVE_SORT":
            return {
                ...state,
                activeSort: payload,
            };
        case "SET_ACTIVE_TYPE":
            return {
                ...state,
                activeType: payload,
                activeManuf: [],
            };
        case "ADD_TO_BASKET": {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.item.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload.item,
                    orderQuantity: payload.quant,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            orderQuantity: orderItem.orderQuantity + payload.quant,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
            };
        }
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        case "CLEAR_BASKET":
            return {
                ...state,
                order: [],
            };
        case "INC_QUANTITY":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id && el.orderQuantity) {
                        const newQuantity = el.orderQuantity + 1;
                        return {
                            ...el,
                            orderQuantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case "DEC_QUANTITY":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id  && el.orderQuantity) {
                        const newQuantity = el.orderQuantity - 1;
                        return {
                            ...el,
                            orderQuantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        default:
            return state;
    }
};
