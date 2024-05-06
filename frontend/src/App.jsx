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
import Register from './routes/register.jsx';
import { useAuthContext } from "./hooks/useAuthContext";
import AccountPage from './routes/accountPage';
import AboutUs from './routes/about.jsx'
import ProductPage from './routes/productPage.jsx';

function App() {
    const { user } = useAuthContext()

    return (
        <div className="App">
            <BrowserRouter errorElement={<ErrorPage />}>
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                    <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                    <Route path="/account" element={user ? <AccountPage /> : <Navigate to="/login" />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/product/:URLName" element={<ProductPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;