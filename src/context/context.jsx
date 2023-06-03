import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSignIn = () => {
    setIsLoggedIn(true);
  };
  const handleSignOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <Context.Provider value={{
        isLoggedIn,
        handleSignIn,
        handleSignOut
      }}>
      {children}
    </Context.Provider>
  );
};
