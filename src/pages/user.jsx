import { useSelector } from 'react-redux';
import SaginIn from './sign-in'
import Edit from '../composents/edit'
import { useState } from 'react';
import Account from '../composents/account'


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
                <Account title ="Argent Bank Checking (x8349)" amount="$2,082.79"/>
                <Account title ="Argent Bank Savings (x6712)" amount="$10,928.42"/>
                <Account title ="Argent Bank Credit Card (x8349)" amount="$184.30"/>
            </main>
        )
    }
}
export default User