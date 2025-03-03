import { useSelector } from 'react-redux';
import SaginIn from './sign-in'
import Edit from '../composents/edit'
import { useState } from 'react';


function User(){
    const isLoged = useSelector((state)=> state.auth.isLoged)
    const firstName = useSelector((state)=> state.profilData.data.body?.firstName)
    const lastName = useSelector((state)=> state.profilData.data.body?.lastName)
    const [isEditing, setEditing] = useState(false)



    if(isLoged == false){
        return(
            <SaginIn/>
        )
    }else {
        return(
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{firstName + ' ' + lastName}!</h1>
                    <button onClick={() => setEditing(true)} className="edit-button">Edit Name</button>
                </div>
                {isEditing && <Edit closeForm ={setEditing} />}
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        )
    }
}
export default User