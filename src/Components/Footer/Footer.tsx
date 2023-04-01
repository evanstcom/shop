import React from "react";
import secondLogo  from "../../icons/logo-2.svg";
import wa from "../../icons/wa.svg";
import tg from "../../icons/tg.svg";
import visa from "../../icons/Visa.svg";
import mc from "../../icons/mc.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import "./style.sass";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__info">
                    <div className="mobile-logo">
                        <img className="footer__logo" src={secondLogo} alt="" />
                        <button className="btn btn_main footer__price mobile">
                            Прайс-лист &emsp; <MdFileDownload />
                        </button>
                    </div>
                    <p className="footer__text">
                        Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    <h4 className="footer__email-title">
                        Подпишись на скидки и акции
                    </h4>
                    <div className="input__block footer__email">
                        <input
                            className="input__area"
                            type="email"
                            placeholder="Введите ваш E-mail"
                        ></input>
                        <button className="input__btn">
                            <span><MdOutlineKeyboardArrowRight /></span>
                        </button>
                    </div>
                </div>
                <div className="footer__links-block">
                    <div className="footer__links">
                        <h3 className="footer__title">Меню сайта:</h3>
                        <a className="footer__link" href=".">
                            О компании
                        </a>
                        <a className="footer__link" href=".">
                            Доставка и оплата
                        </a>
                        <a className="footer__link" href=".">
                            Возврат
                        </a>
                        <a className="footer__link" href=".">
                            Контакты
                        </a>
                    </div>
                    <div className="footer__links">
                        <h3 className="footer__title">Категории:</h3>
                        <a className="footer__link" href=".">
                            Бытовая химия
                        </a>
                        <a className="footer__link" href=".">
                            Косметика и гигиена
                        </a>
                        <a className="footer__link" href=".">
                            Товары для дома
                        </a>
                        <a className="footer__link" href=".">
                            Товары для детей и мам
                        </a>
                        <a className="footer__link" href=".">
                            Посуда
                        </a>
                    </div>
                </div>
                <div className="footer__social">
                    <h3 className="footer__title">Скачать прайс-лист:</h3>
                    <button className="btn btn_main footer__btn">
                        Прайс-лист &emsp; <MdFileDownload />
                    </button>
                    <h4 className="footer__text">Связь в мессенджерах:</h4>
                    <div className="footer__icons">
                        <a href=".">
                            <img src={wa} alt="wa" />
                        </a>
                        <a href=".">
                            <img src={tg} alt="tg" />
                        </a>
                    </div>
                </div>
                <div className="footer__contacts">
                    <h3 className="footer__title">Контакты:</h3>
                    <div className="footer__contact-block">
                        <div className="footer__contact">
                            <h3 className="footer__contact-title">
                                +7 (777) 490-00-91
                            </h3>
                            <h3 className="footer__contact-text">
                                время работы: 9:00-20:00
                            </h3>
                            <h4 className="footer__contact-link">
                                Заказать звонок
                            </h4>
                            <h3 className="footer__contact-title">
                                opt.sultan@mail.ru{" "}
                            </h3>
                            <h3 className="footer__contact-text">
                                На связи в любое время
                            </h3>
                            <div className="footer__icons">
                                <a href=".">
                                    <img src={visa} alt="wa" />
                                </a>
                                <a href=".">
                                    <img src={mc} alt="tg" />
                                </a>
                            </div>
                        </div>
                        <div className="mobile footer__social-mobile">
                            <h4 className="footer__text">
                                Связь в мессенджерах:
                            </h4>
                            <div className="footer__icons">
                                <a href=".">
                                    <img src={wa} alt="wa" />
                                </a>
                                <a href=".">
                                    <img src={tg} alt="tg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
