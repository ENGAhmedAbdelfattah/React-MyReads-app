/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Nested Home/Shelf";
import { useState } from "react";

function Home({ books, onHandleChange }) {
  // State of Shelves
  const [bookshelves] = useState([
    { shelf: "currentlyReading" },
    { shelf: "wantToRead" },
    { shelf: "read" },
  ]);
  // render
  return (
    <div className="app">
      <div className="list-books">
        {/* Home title */}
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* Shelf component */}
          <div>
            {bookshelves.map((el) => (
              <Shelf
                key={el.shelf}
                shelf={el.shelf}
                books={books}
                onHandleChange={onHandleChange}
              />
            ))}
          </div>
        </div>
        {/* Search button */}
        <div className="open-search">
          <Link to={"/search"}>Add a book</Link>
        </div>
      </div>
    </div>
  );
}
export default Home;

