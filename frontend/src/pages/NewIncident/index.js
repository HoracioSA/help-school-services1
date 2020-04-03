import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoimg from '../../assets/logo.svg'
import api from '../../services/api'
import './styles.css'
export default function NewIncident(){
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [value, setValue]=useState('');
    const history = useHistory();
    const UnivId =localStorage.getItem('univId')
    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };
        try {
           await api.post('incidents', data, {
               headers:{Authorization:UnivId}
            });
            history.push('/profile')
        } catch (error) {
            alert(`Something wrong with adding an Incident`)
            
        }

    }

    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Helper"/>
                    <h1>Register new incident</h1>
                    <p>Make a register to be a part of the project halping people around you and if possible around the world!</p>
                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#6C53A1"/>Turn Back</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Incident title"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea type="email" placeholder="Description"
                    value={description}
                    onChange={e =>setDescription(e.target.value)}
                    />
                    <input placeholder="Dificulty in %"
                    value={value}
                    onChange={e =>setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}