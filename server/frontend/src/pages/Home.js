import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import SuggestionBoard from "../components/SuggestionBoard";
import SearchResultBoard from "../components/SearchResultBoard";

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div>
      <SearchBar cb={setSearchResult} />
      {searchResult.length !== 0 && <SearchResultBoard movies={searchResult} />}
      {!searchResult.length && <SuggestionBoard />}
    </div>
  );
};

export default Home;
