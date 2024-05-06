import { useState, useEffect } from "react";
import ProductCard from "../COMPONENTES/tarjeta.jsx";
// import 'tailwindcss/tailwind.css';
import Header from "../COMPONENTES/header.jsx";
import { useParams } from "react-router-dom";


function ProductPage() {
    const { URLName } = useParams()
    const [productInfo, setProductInfo] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/products/" + URLName);
                const json = await response.json()
                if (response.ok) {
                    setProductInfo(json)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <Header />
            <div className="p-4">
                {productInfo ? (
                    <div className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-4">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold">
                                {productInfo.name}
                            </h2>
                            <h3>
                                {productInfo.description}
                            </h3>
                        </div>
                        <div className="flex gap-4 justify-end items-center p-2 border-2 border-zinc-200 rounded-md">
                            <h2 className="text-2xl">
                                {productInfo.sellerInfo.name}
                            </h2>
                            <h4 className="text-xl">{productInfo.price}€</h4>
                            <button className="bg-green-800 hover:bg-green-700 active:bg-green-600 text-white rounded-full py-2 px-4">Añadir al carrito</button>
                        </div>
                    </div>
                ) : "Loading"}

            </div>
        </div>
    );
}

export default ProductPage;
