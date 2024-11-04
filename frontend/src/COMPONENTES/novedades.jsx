import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const CardCarousel = () => {
  const cards = [
    { id: 1, title: 'Tarjeta 1', content: 'Visita Guiada', description: 'Una experiencia única para conocer los rincones históricos', imageUrl: 'https://sobreespana.com/wp-content/uploads/2009/04/alhambra-de-granada.jpg' },
    { id: 2, title: 'Tarjeta 2', content: 'Exposición de Arte', description: 'Disfruta de una colección de arte moderno', imageUrl: 'https://youimg1.c-ctrip.com/target/100r1900000166g0l7626_C_300_300.jpg' },
    { id: 3, title: 'Tarjeta 3', content: 'Concierto al Aire Libre', description: 'Disfruta de la música en vivo', imageUrl: 'https://galekkeropvakantie.nl/wp-content/uploads/2020/04/Alhambra-Nasridische-Paleizen-300x200.jpg' },
    { id: 4, title: 'Tarjeta 4', content: 'Sesión de Yoga', description: 'Relájate y renueva tu energía', imageUrl: 'https://i.pinimg.com/originals/13/7c/1c/137c1c6e2d99f95621b48e85f0a6b114.jpg' },
    { id: 5, title: 'Tarjeta 5', content: 'Clases de Fotografía', description: 'Mejora tus habilidades fotográficas', imageUrl: 'https://inostranno.ru/wp-content/uploads/2020/04/Olivium-Outlet-Center.jpg?x47216' },
    { id: 6, title: 'Tarjeta 6', content: 'Excursión en la Naturaleza', description: 'Una caminata guiada por los mejores paisajes naturales', imageUrl: 'https://eldiario24.es/wp-content/uploads/2017/09/shutterstock_678035068FILEminimizer.jpg' },
    { id: 7, title: 'Tarjeta 7', content: 'Tour Gastronómico', description: 'Prueba los sabores locales', imageUrl: 'https://i.pinimg.com/originals/55/7b/01/557b01ebdd13e58ad3aee461e7f4abc0.jpg' },
    { id: 8, title: 'Tarjeta 8', content: 'Taller de Cocina', description: 'Aprende a cocinar platos locales', imageUrl: 'https://static.grupojoly.com/clip/5abcbee0-3943-4200-adea-50a95d740141_16-9-aspect-ratio_default_0.jpg' },
  ];

  // Función para barajar el array de tarjetas
  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledCards = shuffleCards(cards); // Barajar las tarjetas

  const scrollRef = useRef(null);

  const animateScroll = (scrollContainer, targetScroll, duration) => {
    const initialScroll = scrollContainer.scrollLeft;
    const startTime = performance.now();

    const scrollStep = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(1, elapsedTime / duration);
      const newScroll = initialScroll + (targetScroll - initialScroll) * scrollProgress;
      scrollContainer.scrollLeft = newScroll;

      if (scrollProgress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const targetScroll = scrollContainer.scrollLeft - 200; // Definir el desplazamiento deseado
      const duration = 500; // Duración de la animación en milisegundos
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const targetScroll = scrollContainer.scrollLeft + 200; // Definir el desplazamiento deseado
      const duration = 500;                                        // Duración de la animación en milisegundos
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  return (
    <div className="relative my-8 p-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 relative">NOVEDADES</h2>
      <div className="flex overflow-hidden" ref={scrollRef}>
        {shuffledCards.map(card => (
       <div key={card.id} className="flex-none w-60 bg-white shadow-md mx-6 my-2 rounded-lg p-4">
            <img src={card.imageUrl} alt={card.title} className="w-full h-auto rounded-lg mb-2" />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
            <p className="text-sm text-gray-500 mt-2">{card.description}</p>
            <button className="bg-blue-500 text-white py-1 px-4 rounded mt-2 hover:bg-blue-600 transition duration-300">
              Ver detalle
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default CardCarousel;
