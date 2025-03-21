import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.webp'
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