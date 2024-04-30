import React from 'react';

const Login = ({ onClose }) => { // Recibe la función onClose para cerrar la ventana modal
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <h3 className="text-sm text-gray-500 mb-8">Introduce tus credenciales</h3>
      <form className="space-y-4">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Usuario"
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="password"
          placeholder="Contraseña"
        />
        <a href="#" className="text-blue-500 text-sm">Olvidaste tu contraseña?</a>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Registrarse
        </button>
      </form>
      <button className="absolute top-4 right-4" onClick={onClose}>Cerrar</button> {/* Botón de cierre */}
    </div>
  );
};

export default Login;
