import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import {HandelLoggout} from '../redux/features/authSlice'


function IsLoggedHeadre(){
    const isLoged = useSelector((state)=> state.auth.isLoged)
    const userName = useSelector((state)=> state.profilData.data.body?.userName)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(HandelLoggout()); 
        navigate('/'); 
    };
    if(isLoged){
        return(
            <div className='loggoutHeadre'>
                <Link to={'/user'} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    {userName}
                </Link>
                <button onClick={handleLogout} className="btn">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </button>
            </div>
        )
    }
    return(
        <div>
            <Link to={'/sign-in'} className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </div>
    )
}
export default IsLoggedHeadre