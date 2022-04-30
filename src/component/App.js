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
  const handleChange = (book, e) => {
    const fieldValue = e.currentTarget.value;
    updateBooks(book, fieldValue);
    getBooks();
    setSearch(replace(search));
    getBooks();
  };
  const handleSelectClicked = () => {
    getBooks();
    setSearch(replace(search));
    getBooks();
  };
  const handleSearch = (e) => {
    let prepareValue = String(e.currentTarget.value);
    if (prepareValue) {
      searchBooks(prepareValue, 20);
    } else {
      setSearch([]);
    }
  };
  const handelDeleteSearch = () => {
    setSearch([]);
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
    setSearch([]);
    const resSearch = await BooksAPI.search(query, maxResults);
    /* setState */
    setSearch(replace(resSearch));
    getBooks();
  };

  /* if book in search is found on shelf replace it by data from Books state */
  const replace = (resSearch) => {
    let id = Books.map((el) => el.id);
    let matchedResSearch = Array.isArray(resSearch)
      ? resSearch.map((elResSearch) => {
          if (id.includes(elResSearch.id)) {
            return (elResSearch = Books.filter(
              (el) => el.id === elResSearch.id
            )[0]);
          } else {
            return elResSearch;
          }
        })
      : [];
    return matchedResSearch;
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
            onHandelDeleteSearch={handelDeleteSearch}
            onHandleSelectClicked={handleSelectClicked}
          />
        }
      />
    </Routes>
  );
}

export default App;
