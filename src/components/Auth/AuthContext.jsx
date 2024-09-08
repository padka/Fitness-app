import React, { createContext, useState, useEffect } from'react';
// создание контекста аутентификации
export const AuthContext = createContext();
// создание провайдера аутентификации для компонента
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // получение токена из LocalStorage или sessionsStorage при загрузке приложения
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
    setToken(storedToken);
    }
  }, []);

  // функция для авторизации
  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };
  const isTokenValid = () => {
    const token = localStorage.getItem('token');
    return !! token;
  }

  // функция для выхода из системы
  const logout = () => {
    localStorage.removeItem('token');
      setToken(null);
  };

  // контекст состояний и функциями для компонентов
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};