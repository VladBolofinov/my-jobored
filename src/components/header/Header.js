import './Header.scss';
import '../../style.scss';
import logo from '../../img/icons/logo.svg'
const Header = () => {
    return (
        <header className='wrapper'>
            <div className="header-logo">
                <img src={logo} alt="logo-icon"/>
                <p className='logo-name'>Jobored</p>
            </div>
            <div className="header-links">
                <a href="#">Поиск вакансий</a>
                <a href="#">Избранное</a>
            </div>


        </header>
    )
}

export default Header;