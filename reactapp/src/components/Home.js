import React from "react";
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';


export default function Home(){
    return(
        <div className='container'>
            
            <header className="App-header">
            <h5>Inicio de la aplicacion</h5>
            <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}