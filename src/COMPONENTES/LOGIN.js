import React from 'react';

function Login({ setShowLoginModal }) {
  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowLoginModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="relative z-10 w-full max-w-md mx-4 py-8 px-6 rounded-lg bg-white text-center shadow-outline">
        <h2 className="text-3xl font-semibold mb-3">Login</h2>
        <h3 className="text-gray-400 mb-6 font-medium text-base">Introduce tus credenciales</h3>

        <form className="w-full m-0 grid gap-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Usuario" className="w-full h-12 border-2 border-gray-200 font-sans text-base px-4 rounded-lg transition duration-300 ease-in-out focus:border-blue-500" />
          <input type="password" placeholder="Contraseña" className="w-full h-12 border-2 border-gray-200 font-sans text-base px-4 rounded-lg transition duration-300 ease-in-out focus:border-blue-500" />
          <a href="#" className="text-blue-600 text-sm font-medium text-left no-underline transition duration-300 ease-in-out hover:text-blue-700">Olvidaste tu contraseña?</a>
          <div className="flex justify-center mt-6">
            <button type="submit" className="cursor-pointer font-sans text-base font-semibold text-white bg-blue-600 border-0 rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-700">Iniciar sesión</button>
            <button type="button" className="cursor-pointer font-sans text-base font-semibold text-gray-600 bg-gray-200 border-0 rounded-lg py-2 px-4 ml-4 transition duration-300 ease-in-out hover:bg-gray-300" onClick={handleCloseModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
