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


function App() {
    const { user } = { user: null };

    return (
        <div className="App">
            <BrowserRouter errorElement={<ErrorPage />}>
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/me" element={user ? <p>Ruta protegida <Link to="/">Ir a la tienda</Link></p> : <Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;