import React,{useState} from 'react';
import{Link, useHistory}from 'react-router-dom';
import {FiCornerDownLeft} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css';
import logoimg from '../../assets/logo.svg'
export default function Register(){
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [whatsapp, setWhatsaap]=useState('');
    const [city, setCity]=useState('');
    const [uf, setUf]=useState('');
    const history = useHistory();


    async function handleRegister(e){
        e.preventDefault();
        const data={
            name,
            email,
            password,
            whatsapp,
            city,
            uf
        };
        try {
            
            const response= await api.post('universities', data);
            alert(`Your ID Access is:${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert(`Error in register please try again!`)
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Helper"/>
                    <h1>Register</h1>
                    <p>Make a register to be a part of the project halping people around you and if possible around the world!</p>
                    <Link className="back-link" to="/"><FiCornerDownLeft size={16} color="#6C53A1"/>Make a register</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="University name"
                    value={name} 
                    onChange={e =>setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                    value={email} 
                    onChange={e =>setEmail(e.target.value)}
                    />
                    <input placeholder="Password"
                    value={password} 
                    onChange={e =>setPassword(e.target.value)}
                    />
                    <input placeholder="Whatsapp"
                    value={whatsapp} 
                    onChange={e =>setWhatsaap(e.target.value)}
                    />


                    <div className="input-group">
                        <input placeholder="City"
                        value={city} 
                        onChange={e =>setCity(e.target.value)}
                        />
                        <input placeholder="Uf" style={{width: 80}}
                        value={uf} 
                        onChange={e =>setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
   
}