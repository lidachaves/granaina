import { useState, useEffect } from "react";
import Header from "../COMPONENTES/header";
import { useSignup } from "../hooks/useSignup";
// import 'tailwindcss/tailwind.css';
// import Footer from '../COMPONENTES/footer.jsx';
import { Link } from "react-router-dom";
import zxcvbn from "zxcvbn";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordScore, setPasswordScore] = useState(0);
  const samePassword = password == repeatPassword;
  const { signup, error, isLoading } = useSignup("");
  const passwordScoreColorArray = [
    "red-400",
    "red-400",
    "yellow-500",
    "yellow-500",
    "green-600",
  ];
  const passwordScoreColor = passwordScoreColorArray[passwordScore];
  const minPasswordScore = 2;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, username, name);
  };

  const canSendForm =
    isLoading ||
    passwordScore < minPasswordScore ||
    username == "" ||
    name == "" ||
    email == "" ||
    !samePassword;

  return (
    <div className="App">
      {/* bg-red-400 bg-blue-400 bg-green-600 bg-yellow-500 */}
      <Header />{" "}
      {/* Esta funcion que meti es para controlar el modal como una prop */}
      <div className="flex justify-center items-center p-6">
        <div className="w-96 rounded-lg shadow-lg p-4">
          <h2 className="text-3xl font-bold mb-4">Crear una cuenta</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && error.username ? <div>{error.username}</div> : ""}
            <label htmlFor="name">Nombre</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Nombre"
              name="name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="Correo electónico"
              name="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && error.email ? <div>{error.email}</div> : ""}

            <label htmlFor="password">Contraseña</label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded pt-3 pb-6 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                placeholder="Contraseña"
                name="password"
                defaultValue={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordScore(zxcvbn(e.target.value).score);
                }}
              />
              <div className="flex h-2 overflow-hidden rounded absolute bottom-1 left-1 right-1 bg-gray-200 pointer-events-none">
                <span
                  style={{ width: (passwordScore + 1) * 20 + "%" }}
                  className={"bg-" + passwordScoreColor}
                ></span>
              </div>
            </div>
            <label htmlFor="email">
              Repetir contraseña{" "}
              {!samePassword && (
                <span className="text-red-800">
                  No coinciden
                </span>
              )}
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder="Repetir contraseña"
              name="repeatPassword"
              defaultValue={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {/* <Link to="/forgotpassword" className="text-blue-500 text-sm">¿Olvidaste tu contraseña?</Link> */}
            <Link to="/login" className="text-blue-500 text-sm">
              Iniciar sesión
            </Link>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-500/40"
              disabled={canSendForm}
            >
              Crear una cuenta
            </button>
          </form>
          {error && error.message ? error.message : ""}
        </div>
      </div>
    </div>
  );
}

export default Register;
