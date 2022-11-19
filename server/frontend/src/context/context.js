import React, {  useState } from "react";

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <MovieContext.Provider
      value={{isLoggedIn, setIsLoggedIn}}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
