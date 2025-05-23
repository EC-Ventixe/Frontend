import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const getUserId = () => {
    if (!token) return null;
    const payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload.sub;
  };

  const getUserEmail = () => {
    if (!token) return null;
    const payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload.email;
  };

  const isAuthenticated = !!token;
  const notAuthenticated = !isAuthenticated;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        getUserId,
        getUserEmail,
        isAuthenticated,
        notAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
