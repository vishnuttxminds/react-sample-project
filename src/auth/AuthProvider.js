import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const loginFun = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logoutFun = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loginFun,
        logoutFun,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
