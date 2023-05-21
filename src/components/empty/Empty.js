import searchingMan from '../../img/searching-man.svg';
import './Empty.scss';
import {NavLink} from "react-router-dom";
import React from "react";
//добавь логику при клике на кнопку и переходе на экран поик вакансий отправляся запрос на сервер и обнулялись стейты
const Empty = () => {
    return (
        <div className='wrapper-empty'>
            <img src={searchingMan} alt="not-found"/>
            <p>Упс, здесь еще ничего нет!</p>
            <NavLink to='/'><button>Поиск Вакансий</button></NavLink>
        </div>
    )
}
export default Empty;