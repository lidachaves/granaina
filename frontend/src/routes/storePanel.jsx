import { useState } from 'react';
import Header from '../COMPONENTES/header.jsx';
import { useLogin } from '../hooks/useLogin.js';
import { Link } from 'react-router-dom';

function StorePanel() {
    const { login, error, isLoading } = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let valid = true;
        let emailError = '';
        let passwordError = '';

        if (!email) {
            emailError = 'El email es requerido';
            valid = false;
        } else if (!validateEmail(email)) {
            emailError = 'El email no es válido';
            valid = false;
        }

        if (!password) {
            passwordError = 'La contraseña es requerida';
            valid = false;
        }

        setErrors({ email: emailError, password: passwordError });

        if (valid) {
            await login(email, password);
        }
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center p-6">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={isLoading}
                        >
                            Iniciar Sesión
                        </button>
                        {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
                    </div>
                </form>
            </div>
        </>
    );
}

export default StorePanel;

