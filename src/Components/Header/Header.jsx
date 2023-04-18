const Header = () => {

    return (
        <header className="container">
            <nav className="header-navbar">
                <ul className="header-navbar__list">
                    <li className="header-navbar__list-item">
                        <a className="header-navbar__list-link" href="">Гловна сторінка</a>
                    </li>

                    <li className="header-navbar__list-item">
                        <a className="header-navbar__list-link" href="">Продуктовий каталог</a>
                    </li>

                    <li className="header-navbar__list-item">
                        <a className="header-navbar__list-link" href="">Реферальна програма</a>
                    </li>

                    <li className="header-navbar__list-item">
                        <a className="header-navbar__list-link" href="">Наш блог</a>
                    </li>

                    <li className="header-navbar__list-item">
                        <a className="header-navbar__list-link" href="">Контакти</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header