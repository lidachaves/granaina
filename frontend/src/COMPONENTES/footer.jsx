import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-lg font-bold mb-4">Sobre nosotros</h2>
            <p>Somos una empresa dedicada a...</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Servicios</h2>
            <ul>
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contacto</h2>
            <p>Dirección: 123 Calle Principal</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Redes Sociales</h2>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;