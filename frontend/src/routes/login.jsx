import { useState, useEffect } from 'react'
import '../App.css';
import Header from '../Cabecera.jsx';
// import 'tailwindcss/tailwind.css';
import Footer from '../COMPONENTES/footer.jsx';


function Login() {
    return (
        <div className="App">
            <Header /> {/* Esta funcion que meti es para controlar el modal como una prop */}
            <form>
                <label>Email</label>
                <input type="email" name="email" />
                <label>Password</label>
                <input type="password" name="password" />

            </form>
            <Footer />
        </div>

    );
}

export default Login
