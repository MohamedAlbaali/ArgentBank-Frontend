import { useState } from "react";
import { useDispatch } from 'react-redux';
import {HandelLogin} from '../redux/features/authSlice'
import { useNavigate } from "react-router-dom";
import {getProfilData} from '../redux/features/profilDataSlice'

function SaginIn(){
    const [email, setEmail] = useState('');
    const [pass, SetPass] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault(); 
    };
    async function login(){
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email: email,
                password: pass
            })
        })
        const data = await response.json();

        if(response.ok){
            navigate("/user");
            const token = data.body.token
            dispatch(HandelLogin(token))
            dispatch(getProfilData(token))
        }else{
            const message = data.message
            alert(message)
        }
    }
    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" value={email} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => SetPass(e.target.value)} type="text" id="password" value={pass} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" onClick={login}>Sign In</button>
                </form>
            </section>
        </main>
    )
}
export default SaginIn