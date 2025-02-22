import { Link } from 'react-router-dom';
import '../assets/style/header.css'
import logo from '../assets/img/argentBankLogo.png'
import IsLoggedHeadre from './loggedHeader'
function Header() {
    return (
        <>
            <nav className="main-nav">
                <Link to={'/'} className="main-nav-logo">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <IsLoggedHeadre/>
            </nav>
        </>
    );
}
export default Header