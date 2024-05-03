import { useState, useEffect } from 'react'
import Header from '../COMPONENTES/header.jsx';
import { useLogin } from '../hooks/useLogin.js'
// import 'tailwindcss/tailwind.css';
// import Footer from '../COMPONENTES/footer.jsx';
import { Link } from 'react-router-dom';


function AccountPage() {

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password);
    }
    return (
        <>
            <Header />
            <div className="flex justify-center items-center p-6">

            </div>
        </>
    );
}

export default AccountPage
