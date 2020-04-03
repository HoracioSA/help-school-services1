import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import api from '../../services/api'

import logoimg from '../../assets/logo.svg'
import behelperimg from '../../assets/behelper.png'
export default function Login(){
    const [id, setId]=useState('');
    const [password, setPassword]= useState('');
    const history =useHistory();
    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('/login',{id, password});
            localStorage.setItem('univId', id);
            localStorage.setItem('univPass', password);
            localStorage.setItem('UnivName',response.data.name);
            history.push('/profile');
        } catch (error) {
           alert(`Seems you have problem with login, try again`) 
        }
    }
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoimg} alt="Logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Make a Login</h1>
                    <input placeholder="Your ID"
                    value={id}
                    onChange={e=>setId(e.target.value)}
                    />
                    <input placeholder="Your Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Submit</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#6C53A1"/>Make a register</Link>
                    
                    
                </form>
            </section>

            <img src={behelperimg} alt="Helper"/> 
        </div>
        
    )
}