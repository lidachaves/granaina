import { useState, useEffect } from "react";
import ProductCard from "../COMPONENTES/tarjeta.jsx";
// import 'tailwindcss/tailwind.css';
import Header from "../COMPONENTES/header.jsx";
import Login from "../COMPONENTES/LOGIN.jsx";
import Carousel from "../COMPONENTES/carousel.jsx";
import Offer from "../COMPONENTES/service.jsx";
import CardCarousel from "../COMPONENTES/novedades.jsx";
import Section from "../COMPONENTES/feactures.jsx";
import ProductCardLoading from "../COMPONENTES/productCardLoading.jsx";

function AboutUs() {
    return (
        <div className="App">
            <Header />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam
                earum tempore quia eius accusamus, vel, ipsum ea eligendi, recusandae
                atque pariatur ex porro repellendus odit molestiae corrupti.
                Voluptatibus, ut?
            </p >
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam
                earum tempore quia eius accusamus, vel, ipsum ea eligendi, recusandae
                atque pariatur ex porro repellendus odit molestiae corrupti.
                Voluptatibus, ut?
            </p >
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam
                earum tempore quia eius accusamus, vel, ipsum ea eligendi, recusandae
                atque pariatur ex porro repellendus odit molestiae corrupti.
                Voluptatibus, ut?
            </p >
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam
                earum tempore quia eius accusamus, vel, ipsum ea eligendi, recusandae
                atque pariatur ex porro repellendus odit molestiae corrupti.
                Voluptatibus, ut?
            </p >
        </div>
    );
}

export default AboutUs;
