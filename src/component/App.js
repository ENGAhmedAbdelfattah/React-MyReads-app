/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
// import React
import React from "react";
// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import API
import * as BooksAPI from "../BooksAPI";
// import Components
import Home from "./Home";
import Search from "./Search";
// import Styling
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  /* State */
  const [Books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  /* useEffect */
  useEffect(() => {
    getBooks();
  }, []);
  /* handle Functions */
  console.log(Books);

  const handleChange = (book, e) => {
    console.log(Books);
    const fieldValue = e.currentTarget.value;
    updateBooks(book, fieldValue);
    getBooks();
  };

  console.log();
  const handleSearch = (e) => {
    let prepareValue = String(e.currentTarget.value.trim().split(" ").join(""));
    if (prepareValue) {
      searchBooks(prepareValue, 30);
    } else {
      setSearch([]);
    }
  };

  /* ABI Functions */
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  const updateBooks = async (book, value) => {
    await BooksAPI.update(book, value);
  };

  const searchBooks = async (query, maxResults) => {
    const resSearch = await BooksAPI.search(query, maxResults);
    setSearch(resSearch);
  };

  /*Render */
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home books={Books} API={BooksAPI} onHandleChange={handleChange} />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            search={search}
            books={Books}
            onHandleChange={handleChange}
            onHandleSearch={handleSearch}
          />
        }
      />
    </Routes>
  );
}

export default App;
