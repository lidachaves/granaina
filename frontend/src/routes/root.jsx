import { useState, useEffect } from 'react'
import ProductCard from '../COMPONENTES/tarjeta.jsx';
// import 'tailwindcss/tailwind.css';
import Header from '../COMPONENTES/header.jsx';
import Login from '../COMPONENTES/LOGIN.jsx';
import Carousel from '../COMPONENTES/carousel.jsx';
import Offer from '../COMPONENTES/service.jsx';
import CardCarousel from '../COMPONENTES/novedades.jsx';
import Section from '../COMPONENTES/feactures.jsx';
import ProductCardLoading from '../COMPONENTES/productCardLoading.jsx';

function Root() {
    const [productsInfo, setProductsInfo] = useState(null)

    // const products = [{ name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }]

    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    // Aca defini las diapositivas para el Carousel
    const slides = [
        <div key="1">Slide 1</div>,
        <div key="2">Slide 2</div>,
        <div key="3">Slide 3</div>,
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/products");
                const json = await response.json()
                if (response.ok) {
                    setProductsInfo(json)
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
            {/* {showLogin && <Login />} */}
            {/* <div className="flex justify-center mt-8">
                <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
            </div> */}
            {/* <Offer /> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
                {productsInfo && productsInfo.length != 0 ? productsInfo.map((product) => (
                    <ProductCard key={product._id} productInfo={product} />
                )) : (
                    <>
                        <ProductCardLoading />
                        <ProductCardLoading />
                        <ProductCardLoading />
                        <ProductCardLoading />
                    </>
                )}

            </div>
            {/* <CardCarousel /> */} {/*  componente Novedades aquí */}
            {/* <Section /> */} {/*  componente Features aquí */}
        </div>

    );
}

export default Root
