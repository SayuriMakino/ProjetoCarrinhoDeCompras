import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedIsAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); 
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false'); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
