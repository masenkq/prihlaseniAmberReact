import logo from '../images/logoHeader.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="Amber Plasma logo" className="logo" />
        </header>
    );
}

export default Header;
