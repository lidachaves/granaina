import React from 'react'
// import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import ErrorPage from './routes/error-page.jsx';
import Login from './routes/login.jsx';
import { useAuthContext } from "./hooks/useAuthContext";
import { Link } from 'react-router-dom';



function App() {
    const { user } = useAuthContext()
    console.log(user)

    return (
        <div className="App">
            <BrowserRouter errorElement={<ErrorPage />}>
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/me" />} />
                    <Route path="/me" element={user ? <p>Ruta protegida <Link to="/">Ir a la tienda</Link></p> : <Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;