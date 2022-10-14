import React, { useState, createContext } from 'react';

export const UserContext = createContext('');

const Context = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const themeToggle = () => {
    theme === true ? setTheme(false) : setTheme(true);
  };

  return (
    <UserContext.Provider value={{ theme, themeToggle }}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;
