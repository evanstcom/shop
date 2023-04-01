import React, { useContext, useState } from "react";
import { ShopContext } from "../../context";
import { AiFillSave, AiFillCloseCircle } from "react-icons/ai";
import { createItem } from "../../api";
interface Props {
    setIsCreated: (el: boolean) => void
}

interface INewItem {
    name: string;
    id: string;
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

export const CreateItem: React.FC<Props> = ({ setIsCreated }) => {
    const { addItem } = useContext(ShopContext);
    const [changeData, setChangeData] = useState<INewItem>({
        name: "New item",
        id: "",
        image: "image",
        code: 0,
        manufacturer: "Производитель",
        price: 0,
        brand: "Бренд",
        size: "size",
        quantity: 0,
        type: 1,
        description: "Описание",
    });

    function createData(item: INewItem) {
        setIsCreated(false);
        createItem(item).then((data) => {
            setChangeData((changeData.id = data));
            addItem(changeData);
        });
    }

    return (
        <div className="admin__item">
            <div className="admin__panel">
                <h4 className="admin__key">Создать элемент</h4>
                <div className="admin__icons">
                    <span
                        className="admin__icon admin__icon_edit"
                        onClick={() => createData(changeData)}
                    >
                        <AiFillSave />
                    </span>
                    <span
                        className="admin__icon admin__icon_delete"
                        onClick={() => setIsCreated(false)}
                    >
                        <AiFillCloseCircle />
                    </span>
                </div>
            </div>
            <div className="admin__input-image">
                <img
                    className="admin__image"
                    src="https://imgholder.ru/194x194/EDEDED/adb9ca&text=shop&font=kelson"
                    alt=""
                />
                <input
                    required
                    type="text"
                    placeholder="image URL"
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
                        required
                        type="text"
                        placeholder="Введите название"
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
                        required
                        type="text"
                        placeholder="Производитель"
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
                        required
                        type="text"
                        placeholder="Бренд"
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
                        required
                        type="number"
                        placeholder="Введите стоимость"
                        className="admin__value"
                        onChange={(e) =>
                            setChangeData({
                                ...changeData,
                                price: +e.target.value,
                            })
                        }
                    />
                </div>
                <div className="admin__prop">
                    <h4 className="admin__key">Категория:</h4>
                    <select
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
                        required
                        type="number"
                        placeholder="Введите штрихкод"
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
                        Количество, {changeData.size === "volume" ? "мл" : "г"}:
                    </h4>
                    <input
                        required
                        type="number"
                        placeholder="Введите количество"
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
                    required
                    placeholder="Введите описание товара"
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
    );
};
