import { createContext, useState } from "react";

export const Auth = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [sign, setSign] = useState(
    localStorage.getItem("sign") ? localStorage.getItem("sign") : ""
  );

  return (
    <Auth.Provider value={{ sign, setSign, token, setToken }}>
      {children}
    </Auth.Provider>
  );
};
