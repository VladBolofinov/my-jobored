import React from "react";
import {NavLink} from "react-router-dom";

import logo from '../../img/icons/logo.svg';
import './Header.scss';
import '../../style.scss';

export const Header = () => {
    return (
        <header className='wrapper'>
            <div className="header-logo">
                <img src={logo} alt="logo-icon"/>
                <p className='logo-name'>Jobored</p>
            </div>
            <div className="header-links">
                <NavLink style={({isActive}) => ({color: isActive ? '#5E96FC' : '#232134'})}
                         to='/'>Поиск вакансий</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? '#5E96FC' : '#232134'})}
                         to='/favorites'>Избранное</NavLink>
            </div>
        </header>
    )
}


