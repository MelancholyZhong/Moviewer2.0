import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import SuggestionBoard from "../components/SuggestionBoard";
import SearchResultBoard from "../components/SearchResultBoard";

import "../styles/pages.css";

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div role="main">
      <h1 className="pageTitle">Moviewer</h1>
      <SearchBar cb={setSearchResult} />
      {searchResult.length !== 0 && <SearchResultBoard movies={searchResult} />}
      {!searchResult.length && <SuggestionBoard />}
    </div>
  );
};

export default Home;
