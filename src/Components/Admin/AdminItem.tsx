import React, { useContext, useState } from "react";
import { ShopContext } from "../../context";
import { AiFillEdit, AiFillDelete, AiFillSave } from "react-icons/ai";
import { saveItem, deleteItem } from "../../api";
import { IItem } from "../../Types/data";

export interface IChangeData{
        name: string;
        image: string;
        code: number;
        manufacturer: string;
        price: number;
        brand: string;
        size: string;
        quantity: number;
        type: number;
        description: string;
}

export const AdminItem = (props: IItem) => {
    const [isEdit, setIsEdit] = useState(false);
    const { removeItem } = useContext(ShopContext);
    const {
        name,
        image,
        code,
        manufacturer,
        price,
        brand,
        size,
        quantity,
        id,
        type,
        description,
    } = props;

    const [changeData, setChangeData] = useState<IChangeData>({
        name: name,
        image: image,
        code: code,
        manufacturer: manufacturer,
        price: price,
        brand: brand,
        size: size,
        quantity: quantity,
        type: type,
        description: description,
    });

    function saveChanges() {
        setIsEdit(false);
        saveItem(changeData, id);
    }

    function removeData(id:string) {
        deleteItem(id);
        removeItem(id);
    }

    return (
        <>
            {!isEdit ? (
                <div className="admin__item">
                    <div className="admin__panel">
                        <h4 className="admin__key">id: {id}</h4>
                        <div className="admin__icons">
                            <span
                                className="admin__icon admin__icon_edit"
                                onClick={() => setIsEdit(true)}
                            >
                                <AiFillEdit />
                            </span>
                            <span
                                className="admin__icon admin__icon_delete"
                                onClick={() => removeData(id)}
                            >
                                <AiFillDelete />
                            </span>
                        </div>
                    </div>
                    <img
                        className="admin__image"
                        src={
                            !changeData.image.includes("http")
                                ? "https://imgholder.ru/194x194/EDEDED/adb9ca&text=shop&font=kelson"
                                : changeData.image
                        }
                        alt=""
                    />
                    <div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Название:</h4>
                            <h4 className="admin__value">{changeData.name}</h4>
                        </div>

                        <div className="admin__prop">
                            <h4 className="admin__key">Производитель:</h4>
                            <h4 className="admin__value">
                                {changeData.manufacturer}
                            </h4>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Бренд:</h4>
                            <h4 className="admin__value">{changeData.brand}</h4>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Цена:</h4>
                            <h4 className="admin__value">{changeData.price}</h4>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Категория:</h4>
                            <h4 className="admin__value">
                                {+changeData.type === 1
                                    ? "Уход за телом"
                                    : +changeData.type === 2
                                    ? "Уход за руками"
                                    : ""}
                            </h4>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Штрихкод:</h4>
                            <h4 className="admin__value">{changeData.code}</h4>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Размер:</h4>
                            <h4 className="admin__value">
                                {changeData.size === "volume"
                                    ? "Объем"
                                    : changeData.size === "size"
                                    ? "Масса"
                                    : ""}
                            </h4>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">
                                Количество,{" "}
                                {changeData.size === "volume"
                                    ? "мл"
                                    : changeData.size === "size"
                                    ? "г"
                                    : ""}
                                :
                            </h4>
                            <h4 className="admin__value">
                                {changeData.quantity}
                            </h4>
                        </div>
                    </div>
                    <div className="admin__prop">
                        <h4 className="admin__key">Описание:</h4>
                        <h4 className="admin__value">
                            {changeData.description}
                        </h4>
                    </div>
                </div>
            ) : (
                <div className="admin__item">
                    <div className="admin__panel">
                        <h4 className="admin__key">id: {id}</h4>
                        <div className="admin__icons">
                            <span
                                className="admin__icon admin__icon_edit"
                                onClick={saveChanges}
                            >
                                <AiFillSave />
                            </span>
                            <span className="admin__icon admin__icon_delete">
                                <AiFillDelete />
                            </span>
                        </div>
                    </div>
                    <div className="admin__input-image">
                        <img
                            className="admin__image"
                            src={
                                !changeData.image.includes("http")
                                    ? "https://imgholder.ru/194x194/EDEDED/adb9ca&text=shop&font=kelson"
                                    : changeData.image
                            }
                            alt=""
                        />
                        <input
                            type="text"
                            value={changeData.image}
                            className="admin__value"
                            onChange={(e) =>
                                setChangeData({
                                    ...changeData,
                                    image: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Название:</h4>
                            <input
                                type="text"
                                value={changeData.name}
                                className="admin__value"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="admin__prop">
                            <h4 className="admin__key">Производитель:</h4>
                            <input
                                type="text"
                                value={changeData.manufacturer}
                                className="admin__value"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        manufacturer: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Бренд:</h4>
                            <input
                                type="text"
                                value={changeData.brand}
                                className="admin__value"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        brand: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Цена:</h4>
                            <input
                                type="number"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        price: +e.target.value,
                                    })
                                }
                                value={changeData.price}
                                className="admin__value"
                            />
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Категория:</h4>
                            <select
                                defaultValue={changeData.type}
                                name="type"
                                className="admin__value"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        type: +e.target.value,
                                    })
                                }
                            >
                                <option value="1">Уход за телом</option>
                                <option value="2">Уход за руками</option>
                            </select>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Штрихкод:</h4>
                            <input
                                type="number"
                                value={changeData.code}
                                className="admin__value"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        code: +e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">Размер:</h4>
                            <select
                                defaultValue={changeData.size}
                                name="size"
                                className="admin__value"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        size: e.target.value,
                                    })
                                }
                            >
                                <option value="volume">Объем</option>
                                <option value="size">Масса</option>
                            </select>
                        </div>
                        <div className="admin__prop">
                            <h4 className="admin__key">
                                Количество,{" "}
                                {changeData.size === "volume"
                                    ? "мл"
                                    : changeData.size === "size"
                                    ? "г"
                                    : ""}
                                :
                            </h4>
                            <input
                                type="number"
                                value={changeData.quantity}
                                className="admin__value"
                                onChange={(e) =>
                                    setChangeData({
                                        ...changeData,
                                        quantity: +e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="admin__prop">
                        <h4 className="admin__key">Описание:</h4>
                        <textarea
                            value={changeData.description}
                            className="admin__value"
                            onChange={(e) =>
                                setChangeData({
                                    ...changeData,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
            )}
        </>
    );
};
