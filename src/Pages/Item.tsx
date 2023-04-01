import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { useParams } from "react-router-dom";
import { MdFileDownload } from "react-icons/md";
import { getItem } from "../api";
import { BreadCrumbs } from "../Components/Breadcrumbs/BreadCrumbs";
import bottle from "../icons/bottle.svg";
import box from "../icons/box.svg";
import { IItem } from "../Types/data";
window.scrollTo(0, 0);

export const Item: React.FC = () => {
    const { addToBasket } = useContext(ShopContext);
    /*  const navigate = useNavigate(); */
    const { id = '' } = useParams();
    const [item, setItemPage] = useState<IItem>();
    const [loading, setLoading] = useState<boolean>(true);
    const [itemQuant, setItemQuant] = useState<number>(1);
    useEffect(() => {
        setLoading(true);
        getItem(id).then((data) => {
            setItemPage(data);
            setLoading(false);
        });
        //eslint-disable-next-line
    }, []);

    if (loading) return <h2 className="main-section container">Загрузка...</h2>

    if (!item) return <h2 className="main-section">Ничего не найдено</h2>

    return (
        <section className="main-section container">
            <BreadCrumbs name={item.name} />
            {!loading ? (
                <div className="item-page">
                    <div className="item-page__image-block">
                        <img
                            className="item-page__image"
                            src={
                                item.image && !item.image.includes("http")
                                    ? "https://imgholder.ru/194x194/EDEDED/adb9ca&text=shop&font=kelson"
                                    : item.image
                            }
                            alt="itemimage"
                        />
                    </div>
                    <div className="item-page__info">
                        <div>
                            <h4 className="item-page__class">В наличии</h4>
                            <h3 className="item-page__name">
                                <span>{item.brand}</span> {item.name}
                            </h3>
                            <div className="item__size">
                                {item.size === "size" ? (
                                    <>
                                        <img
                                            className="item__size-image"
                                            src={box}
                                            alt=""
                                        />
                                        <span className="item__size-prop">
                                            {item.quantity} г
                                        </span>
                                    </>
                                ) : item.size === "volume" ? (
                                    <>
                                        <img
                                            className="item__size-image"
                                            src={bottle}
                                            alt=""
                                        />
                                        <span className="item__size-prop">
                                            {item.quantity} мл
                                        </span>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item-page__order">
                                <div className="item-page__price">
                                    {item.price} ₸
                                </div>
                                <div className="item-page__change">
                                    <div
                                        onClick={
                                            itemQuant === 1
                                                ? () => setItemQuant(1)
                                                : () =>
                                                    setItemQuant(
                                                        (prev) => prev - 1
                                                    )
                                        }
                                    >
                                        -
                                    </div>
                                    <span>{itemQuant}</span>
                                    <div
                                        onClick={() =>
                                            setItemQuant((prev) => prev + 1)
                                        }
                                    >
                                        +
                                    </div>
                                </div>
                                <button
                                    className="item__btn btn btn_main"
                                    onClick={() =>
                                        addToBasket(
                                            {
                                                id,
                                                name: item.name,
                                                image: item.image,
                                                price: item.price,
                                                description: item.description,
                                                size: item.size,
                                                quantity: item.quantity,
                                                brand: item.brand,
                                            },
                                            itemQuant
                                        )
                                    }
                                >
                                    в корзину{" "}
                                    <svg
                                        width="27"
                                        height="27"
                                        viewBox="0 0 27 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M24.448 8.09209C24.2955 7.87908 24.0909 7.77258 23.8341 7.77258H7.48756L7.0439 6.61757C6.93156 6.23889 6.77908 5.91543 6.58649 5.6472C6.39389 5.37897 6.18926 5.18963 5.97259 5.07918C5.75592 4.96873 5.56734 4.89378 5.40684 4.85434C5.24635 4.81489 5.08585 4.79517 4.92536 4.79517H1.62717C1.41852 4.79517 1.24198 4.86617 1.09753 5.00817C0.953083 5.15018 0.880859 5.33163 0.880859 5.55253C0.880859 5.67876 0.912959 5.80104 0.977157 5.91938C1.04136 6.03772 1.13364 6.12844 1.25401 6.19155C1.37438 6.25467 1.49877 6.28622 1.62717 6.28622H4.92536C4.98955 6.28622 5.04974 6.29411 5.10591 6.30989C5.16209 6.32567 5.23832 6.39273 5.33462 6.51107C5.43092 6.62941 5.51117 6.80691 5.57537 7.04359L9.02832 16.5248C9.06042 16.6195 9.11258 16.7102 9.1848 16.797C9.25703 16.8838 9.34129 16.9508 9.43758 16.9982C9.53388 17.0455 9.6382 17.0692 9.75055 17.0692H20.1507C20.3112 17.0692 20.4596 17.0218 20.5961 16.9272C20.7325 16.8325 20.8248 16.7142 20.8729 16.5722L24.5563 8.79029C24.6365 8.53783 24.6004 8.3051 24.448 8.09209ZM19.621 15.5545H10.3524L7.89682 9.2873H22.7266L19.621 15.5545ZM18.2328 17.8905C17.7031 17.8905 17.2497 18.0759 16.8726 18.4467C16.4954 18.8175 16.3068 19.2633 16.3068 19.784C16.3068 20.3047 16.4954 20.7504 16.8726 21.1212C17.2497 21.492 17.7031 21.6774 18.2328 21.6774C18.7624 21.6774 19.2158 21.492 19.593 21.1212C19.9701 20.7504 20.1587 20.3047 20.1587 19.784C20.1587 19.2633 19.9701 18.8175 19.593 18.4467C19.2158 18.0759 18.7624 17.8905 18.2328 17.8905ZM11.2993 17.8905C10.9462 17.8905 10.6212 17.9773 10.3243 18.1509C10.0274 18.3245 9.79469 18.5532 9.62617 18.8373C9.45765 19.1213 9.37339 19.4368 9.37339 19.784C9.37339 20.3047 9.56197 20.7504 9.93913 21.1212C10.3163 21.492 10.7697 21.6774 11.2993 21.6774C11.829 21.6774 12.2824 21.492 12.6595 21.1212C13.0367 20.7504 13.2253 20.3047 13.2253 19.784C13.2253 19.6577 13.2133 19.5315 13.1892 19.4053C13.1651 19.2791 13.129 19.1607 13.0808 19.0503C13.0327 18.9398 12.9725 18.8333 12.9003 18.7308C12.8281 18.6282 12.7478 18.5335 12.6595 18.4467C12.5713 18.36 12.475 18.2811 12.3706 18.2101C12.2663 18.1391 12.158 18.0799 12.0456 18.0326C11.9333 17.9852 11.8129 17.9497 11.6845 17.9261C11.5561 17.9024 11.4277 17.8905 11.2993 17.8905Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="item-page__links">
                                <div className="item-page__link-block">
                                    <svg
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.00004 13.5C4.87469 13.4974 5.71626 13.1653 6.35704 12.57L12.617 16.147C12.4073 16.9666 12.4998 17.8343 12.8775 18.5913C13.2552 19.3483 13.893 19.9439 14.674 20.2692C15.455 20.5944 16.327 20.6274 17.1304 20.3623C17.9338 20.0971 18.6148 19.5515 19.0488 18.8252C19.4827 18.099 19.6406 17.2408 19.4935 16.4076C19.3464 15.5745 18.9042 14.8222 18.2478 14.2885C17.5914 13.7548 16.7647 13.4753 15.919 13.5013C15.0734 13.5273 14.2655 13.857 13.643 14.43L7.38304 10.853C7.44904 10.603 7.48504 10.344 7.49104 10.085L13.641 6.56996C14.2332 7.10874 14.9927 7.42747 15.792 7.47268C16.5913 7.51789 17.3818 7.28684 18.031 6.81828C18.6802 6.34972 19.1484 5.67217 19.3572 4.89929C19.5661 4.1264 19.5027 3.30522 19.1779 2.5735C18.853 1.84178 18.2864 1.24404 17.5731 0.88056C16.8597 0.517083 16.0431 0.409982 15.2602 0.577226C14.4772 0.744469 13.7756 1.17588 13.2731 1.79909C12.7705 2.42229 12.4976 3.19937 12.5 3.99996C12.504 4.28796 12.543 4.57497 12.617 4.85296L6.93304 8.09997C6.60341 7.59003 6.1468 7.17461 5.60805 6.89454C5.06931 6.61446 4.46697 6.47936 3.86021 6.50251C3.25346 6.52566 2.66316 6.70627 2.14732 7.02658C1.63148 7.34689 1.20785 7.79589 0.918041 8.32946C0.628232 8.86303 0.48222 9.46282 0.494351 10.0699C0.506482 10.677 0.676338 11.2704 0.98723 11.792C1.29812 12.3136 1.73936 12.7453 2.26758 13.0447C2.7958 13.3442 3.39284 13.5011 4.00004 13.5Z"
                                            fill="#FFC85E"
                                        />
                                    </svg>
                                </div>
                                <div className="item-page__link-block">
                                    <h4>
                                        При покупке от <span>10 000 ₸</span>{" "}
                                        бесплатная <br /> доставка по Кокчетаву
                                        и области
                                    </h4>
                                </div>
                                <div className="item-page__link-block">
                                    <h3>
                                        Прайс-лист &emsp; <MdFileDownload />
                                    </h3>
                                </div>
                            </div>

                            <div className="item-page__prop">
                                <h4 className="item__prop">
                                    Производитель:{" "}
                                    <span>{item.manufacturer}</span>{" "}
                                </h4>
                                <h4 className="item__prop">
                                    Бренд: <span>{item.brand}</span>
                                </h4>
                                <h4 className="item__prop">
                                    Артикул: <span>{id}</span>{" "}
                                </h4>
                                <h4 className="item__prop">
                                    Штрихкод: <span>{item.code}</span>{" "}
                                </h4>
                            </div>
                        </div>
                        <div className="item-page__prop">
                            <h4 className="item__prop">
                                <span>Описание</span>
                            </h4>
                            <h4 className="item__prop">{item.description}</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="main-section">Загрузка...</h2>
            )}
        </section>
    );
};

