import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img className="h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          </div>
          <div className="ml-4 flex flex-1 justify-center space-x-6">
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Blog
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex justify-end flex-1">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17 2h-3c-2.58 0-4.94 1.34-6.27 3.53C6.67 6.52 6 8.67 6 11v1H2v4h4v7h5v-7h3l1-4h-4V9c0-1.43.5-2.83 1.41-3.89C12.36 4.37 14.59 3 17 3h3V2z" />
              </svg>
            </a>
            <a href="#" className="ml-4 text-gray-300 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.4 5.5c-.73.31-1.5.52-2.31.62.83-.5 1.46-1.29 1.76-2.24-.78.46-1.64.8-2.55.98-.73-.78-1.78-1.27-2.93-1.27-2.23 0-4.04 1.81-4.04 4.04 0 .32.04.63.09.93-3.36-.17-6.33-1.78-8.32-4.23-.35.61-.55 1.32-.55 2.08 0 1.39.71 2.62 1.78 3.34-.66-.02-1.29-.2-1.83-.51v.05c0 1.94 1.38 3.56 3.21 3.92-.33.09-.68.14-1.04.17-.24-.02-.48-.03-.72-.03-.21 0-.41-.01-.61-.05.41 1.28 1.61 2.21 3.02 2.24-1.11.88-2.51 1.41-4.04 1.41-.26 0-.52-.02-.77-.05 1.44.92 3.16 1.46 5.01 1.46 6.01 0 9.29-4.98 9.29-9.3 0-.14 0-.27-.01-.41.64-.46 1.2-1.04 1.63-1.7z" />
              </svg>
            </a>
            <a href="#" className="ml-4 text-gray-300 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 3h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zM6 7v10H4V7h2zm2 0a1 1 0 110-2 1 1 0 010 2zm10 4a4 4 0 11-8 0 4 4 0 018 0zm-4 3a1 1 0 100-2 1 1 0 000 2zm3-3v1h-1v-1a1 1 0 10-2 0v1h-1v-3h1v.82a2 2 0 012 1.18c.83 0 1.5-.59 1.5-1.65V11h1z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-sm">&copy; 2024 Tailwind Company. Todos los derechos reservados.</div>
          <div className="mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-300 hover:text-white">Política de privacidad</a>
            <span className="mx-2 text-gray-300">|</span>
            <a href="#" className="text-gray-300 hover:text-white">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
