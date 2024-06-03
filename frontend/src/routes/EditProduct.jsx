import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext.js";

function EditProduct() {
  const [productsInfo, setProductsInfo] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productURLName, setProductURLName] = useState("");

  const { user } = useAuthContext();

  // Aca defini las diapositivas para el Carousel
  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/storepanel/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            name: productName,
            description: productDescription,
            price: productPrice,
            URLName: productURLName,
          }),
        }
      );
      const json = await response.json();
      if (response.ok) {
        console.log("Product added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/storepanel/products",
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setProductsInfo(json);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Productos</h1>
          {/* BUSCADOR */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded py-2 px-3"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2">
              Search
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">Productos</h2>
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 px-4 py-2">Nombre</th>
                <th className="w-1/3 px-4 py-2">Descripción</th>
                <th className="w-1/3 px-4 py-2">Precio</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {productsInfo &&
                productsInfo.map((product) => (
                  <tr key={product._id}>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.description}</td>
                    <td className="border px-4 py-2">{product.price}€</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <form
          className="bg-white p-6 rounded-lg shadow-lg mb-6"
          onSubmit={handleCreateProduct}
        >
          <h2 className="text-2xl font-bold mb-4">Añadir un nuevo producto</h2>
          <div className="grid grid-cols-2 gap-2">
            <label>Nombre</label>
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              defaultValue={productName}
            />
            <label>URLName</label>
            <input
              type="text"
              onChange={(e) => setProductURLName(e.target.value)}
              defaultValue={productURLName}
            />
            <label>Descripción</label>
            <input
              type="text"
              onChange={(e) => setProductDescription(e.target.value)}
              defaultValue={productDescription}
            />
            <label>Precio</label>
            <input
              type="number"
              onChange={(e) => setProductPrice(e.target.value)}
              defaultValue={productPrice}
            />
          </div>
          <button
            type="submit"
            className="grid-flow-row bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
          >
            Crear
          </button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
