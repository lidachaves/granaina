import { useState, useEffect } from "react";
import Header from "../COMPONENTES/header.jsx";
// import 'tailwindcss/tailwind.css';
// import Footer from '../COMPONENTES/footer.jsx';
import { useAuthContext } from "../hooks/useAuthContext.js";

function AccountPage() {
  const { user } = useAuthContext();

  const [name, setName] = useState(user.name);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Bearer ${user.token}`);
      try {
        const response = await fetch("http://localhost:5000/api/users", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await response.json();
        if (response.ok) {
          setName(json.name);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        name: name,
      }),
    });
  };
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center p-6">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap2"
        >
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </>
  );
}

export default AccountPage;
