import React, { useState } from "react";
import "../styles/FavoriteList.css";

// return will return a list of movies
// movie.Poster comes from the movie object
const FavoriteList = () => {
  // grab userId by context
  // fetch backend api(getFavList) -> need to pass the userId
  const [movies] = useState([
    {
      id: "id1",
      Title: "Planet Earth II",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg",
    },
    {
      id: "id2",
      Title: "The Godfather",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: "id3",
      Title: "Hollywood",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTIxMDg2MDk3OF5BMl5BanBnXkFtZTcwMzcxMTIzMQ@@._V1_.jpg",
    },
    {
      id: "id2",
      Title: "The Godfather",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: "id3",
      Title: "Hollywood",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTIxMDg2MDk3OF5BMl5BanBnXkFtZTcwMzcxMTIzMQ@@._V1_.jpg",
    },
  ]);

  //   const getFavoriteList = async (userId) => {
  //     try {
  //       const list = await fetch("/api/login/userID", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  // const remove =async(movie_id)=>{
  //   // delete api to delete fav item by moview_id
  // }

  return (
    <>
      <div className="movie-row">
        <div className="row">
          {movies.map((movie) => (
            <div className="column">
              <img
                src={movie.Poster}
                className="posterSize"
                alt="image of movie"
              ></img>
              <div className="button-align">
                <button className="btn btn-primary btn-rounded btn-block">Remove from List</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoriteList;
