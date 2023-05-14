import './Header.scss';
import '../../style.scss';
import logo from '../../img/icons/logo.svg'
import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className='wrapper'>
            <div className="header-logo">
                <img src={logo} alt="logo-icon"/>
                <p className='logo-name'>Jobored</p>
            </div>
            <div className="header-links">
                <a href="#">Поиск вакансий</a>
                <Link to='/favorites'>Избранное</Link>
            </div>

        </header>
    )
}

export default Header;


