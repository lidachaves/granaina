import Header from "../COMPONENTES/header.jsx";
import { useCart } from "../hooks/useCart.js";

function PaymentPage() {
  const { cart } = useCart();

  function handlePayment() {}

  return (
    <div className="App">
      <Header />
      <div className="p-4">
        <p>Esto es una página de pruebas</p>
        <h2>Productos</h2>
        <ul>
          {cart &&
            cart.map((product) => (
              <li>
                <h3>{product.name}</h3>
                <h4>{product.price}€</h4>
                <h4>
                  {product.quantity}{" "}
                  {product.quantity == 1 ? "unidad" : "unidades"}
                </h4>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentPage;
