import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginFun = () => {
    setIsAuthenticated(true);
  };

  const logoutFun = () => {
    setIsAuthenticated(false);
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
