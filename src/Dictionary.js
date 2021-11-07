import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Professor's Dictionary</h1>
      <h2>What word do you want to know more about?</h2>
      <form onSubmit={searchWord}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
      </form>
      <Results results={results} />
    </div>
  );
}
