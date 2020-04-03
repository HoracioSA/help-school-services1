import React,{useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import logoimg from '../../assets/logo.svg'
import{FiPower,FiTrash2} from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'
export default function Profile(){
    const history = useHistory();
    const [incidents, setIncidents]=useState([]);
    const UnivName=localStorage.getItem('UnivName');
    const UnivId =localStorage.getItem('univId')
    useEffect(()=>{
        api.get('profile',{
            headers:{Authorization:UnivId}
        }).then(response =>{
            setIncidents(response.data);
        })

    },
    [UnivId]);
    //Delete function
    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {headers:{
                Authorization:UnivId,
            }});
            //for deleting from the page without update the page.
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert(`Something was wrong during Deleting process!`)
        }
    }
    function logout(){
        localStorage.clear();
        // For sending back to de login page
        history.push('/')
    }
    return(
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be the helper"/>
    <span>Wellcome: {UnivName}</span>
           
                <Link className="button" to='/incidents/new'>Register a new incident</Link>
            <button type="button">
                <FiPower onClick={logout} size={18} color="#6C53A1"/>
            </button>
            </header>
            <h1>Registered Incidents</h1>
            <ul>
                {incidents.map(incident=>(
                    <li key={incident.id}>
                    <strong>Incidents</strong>
                <p>{incident.title}</p>
                    <strong>Description:</strong>
                    <p>{incident.description}</p>
                    <strong>Dificulty:</strong>
                <p>{incident.value}</p>
                    <button onClick={()=>handleDeleteIncident(incident.id)}>
                        <FiTrash2 size={20}color="#6C53A1"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}