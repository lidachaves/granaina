import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const JSONResponse = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(JSONResponse));

      dispatch({ type: "LOGIN", payload: JSONResponse });

      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(JSONResponse.error);
    }
  };

  return { login, isLoading, error };
};
