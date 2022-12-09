// Aaron Leung
import React, { useState } from "react";

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [favList, setFavList] = useState([]);
  const [wishList, setWishList] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userId,
        setUserId,
        favList,
        setFavList,
        wishList,
        setWishList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
