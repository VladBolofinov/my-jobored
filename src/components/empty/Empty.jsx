import React from "react";
import {NavLink} from "react-router-dom";

import searchingMan from '../../img/searching-man.svg';
import './Empty.scss';

export const Empty = ({onEmptyPage,onDeleteFilter}) => {
    return (
        <div className='wrapper-empty'>
            <img src={searchingMan} alt="not-found"/>
            <p>Упс, здесь еще ничего нет!</p>
            <NavLink onClick={()=>{onEmptyPage(); onDeleteFilter();}} to='/'>
                <button>Поиск Вакансий</button>
            </NavLink>
        </div>
    )
}