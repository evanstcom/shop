import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";
import { IoSearchOutline, IoMenuOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import logo from "../../icons/logo.svg";
import call from "../../icons/call.png";
import { CartHeader } from "./CartHeader";
import { Link } from "react-router-dom";
import "./style.sass";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top-menu container">
                    <div className="header__contacts">
                        <div className="header__contacts-item">
                            <p className="header__contacts-icon">
                                <SlLocationPin />
                            </p>
                            <div className="header__info">
                                <h3 className="header__contacts-title">
                                    г. Кокчетав, ул. Ж. Ташенова 129Б
                                </h3>
                                <h4 className="header__contacts-subtitle">
                                    (Рынок Восточный)
                                </h4>
                            </div>
                        </div>
                        <div className="header__contacts-item">
                            <p className="header__contacts-icon">
                                <FiMail />
                            </p>
                            <div className="header__info">
                                <h3 className="header__contacts-title">
                                    opt.sultan@mail.ru
                                </h3>
                                <h4 className="header__contacts-subtitle">
                                    На связи в любое время
                                </h4>
                            </div>
                        </div>
                    </div>
                    <nav className="header__nav nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="." className="nav__link">
                                    О компании
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="." className="nav__link">
                                    Доставка и оплата
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="." className="nav__link">
                                    Возврат
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="." className="nav__link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="header__container">
                <div className="container header__main-menu">
                    <div className="mobile__menu mobile">
                        <span className="mobile__icon">
                            <IoMenuOutline />
                        </span>
                    </div>
                    <Link to="/">
                        <img className="header__logo" src={logo} alt="" />
                    </Link>
                    <Link to="/catalog" className="btn btn_main header__btn">
                        Каталог &emsp;
                        <BsGrid />
                    </Link>
                    <div className="header__search input__block">
                        <input
                            className="input__area"
                            type="text"
                            placeholder="Поиск..."
                        ></input>
                        <button className="input__btn">
                            <IoSearchOutline />
                        </button>
                    </div>
                    <div className="header__callback">
                        <div className="header__phone">
                            <h3 className="header__contact-title">
                                +7 (777) 490-00-91
                            </h3>
                            <h3 className="header__contact-text">
                                время работы: 9:00-20:00
                            </h3>
                            <h4 className="header__contact-link">
                                Заказать звонок
                            </h4>
                        </div>
                        <img className="header__img" src={call} alt="" />
                    </div>
                    <div className="header__price">
                        <button className="btn btn_main">
                            Прайс-лист &emsp; <MdFileDownload />
                        </button>
                    </div>
                    <CartHeader />
                </div>
            </div>
            <div className="header__mobile mobile">
                <div>
                    <Link to="/catalog">
                        <span>
                            <BsGrid />
                        </span>
                        Каталог
                    </Link>
                </div>
                <div>
                    <h3>
                        <span>
                            <IoSearchOutline />
                        </span>
                        Поиск
                    </h3>
                </div>
            </div>
        </header>
    );
};
