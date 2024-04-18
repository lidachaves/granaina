import { useState } from 'react'
import './App.css';
import Header from './Cabecera.jsx';
import ProductCard from './COMPONENTES/tarjeta.jsx';
import Login from './COMPONENTES/LOGIN.jsx';
// import 'tailwindcss/tailwind.css';
import Footer from './COMPONENTES/footer.jsx';
import Banner1 from './COMPONENTES/banner1.jsx';


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false); // Esta funcion es  para controlar la visibilidad del modal de inicio de sesión :)
  const [productsInfo, setProductsInfo] = useState(null)

  // const products = [{ name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }, { name: 'product1', description: "lorem ipsum", price: 20.00 }]

  const fetchProducts = async () => {
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

  fetchProducts()

  return (
    <div className="App">
      <Header setShowLoginModal={setShowLoginModal} /> {/* Esta funcion que meti es para controlar el modal como una prop */}
      <Banner1 />
      <div className="flex flex-wrap justify-around mt-8">
        {productsInfo ? productsInfo.map((product) => (
          <ProductCard key={product._id} productInfo={product} />
        )) : 'No hay productos'}

      </div>
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
      <Footer />
    </div>

  );
}

export default App
