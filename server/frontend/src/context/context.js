import React, {  useState } from "react";

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");


  return (
    <MovieContext.Provider
      value={{isLoggedIn, setIsLoggedIn, userId, setUserId}}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
