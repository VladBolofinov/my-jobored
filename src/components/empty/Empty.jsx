import React from "react";
import {NavLink} from "react-router-dom";

import searchingMan from '../../img/searching-man.svg';
import './Empty.scss';

//добавь логику при клике на кнопку и переходе на экран поик вакансий отправляся запрос на сервер и обнулялись стейты
export const Empty = () => {
    return (
        <div className='wrapper-empty'>
            <img src={searchingMan} alt="not-found"/>
            <p>Упс, здесь еще ничего нет!</p>
            <NavLink to='/'><button>Поиск Вакансий</button></NavLink>
        </div>
    )
}