import { useState, useEffect } from 'react'
import Header from '../Cabecera.jsx';
import { useLogin } from '../hooks/useLogin'
// import 'tailwindcss/tailwind.css';
// import Footer from '../COMPONENTES/footer.jsx';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isLoading } = useLogin("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password);
    }
    return (
        <div className="App">
            <Header /> {/* Esta funcion que meti es para controlar el modal como una prop */}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" name="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled={isLoading}>Iniciar sesión</button>
            </form>
            {/* <Footer /> */}
        </div>

    );
}

export default Login
