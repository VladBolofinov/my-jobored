import React from "react";
import {NavLink} from "react-router-dom";

import searchingMan from '../../img/searching-man.svg';
import './Empty.scss';

import {useDispatch} from 'react-redux';
import {onEmptyPage} from "../../actions";
export const Empty = ({onDeleteFilter}) => {
    const dispatch = useDispatch();
    return (
        <div className='wrapper-empty'>
            <img src={searchingMan} alt="not-found"/>
            <p>Упс, здесь еще ничего нет!</p>
            <NavLink onClick={()=>{dispatch(onEmptyPage(false)); onDeleteFilter();}} to='/'>
                <button>Поиск Вакансий</button>
            </NavLink>
        </div>

    )
}