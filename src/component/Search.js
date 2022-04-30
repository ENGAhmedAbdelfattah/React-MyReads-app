/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import { Link } from "react-router-dom";
import Book from "./Nested Home/Nested Shelf/Book";

function Search({ search, onHandleChange, onHandleSearch }) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            style={{ caretColor: "blue" }}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => onHandleSearch(e)}
            autoFocus
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {search &&
            Array.isArray(search) &&
            search.map((el) => (
              <Book
                key={el.id}
                book={el}
                bookTitle={el.title ? el.title : ""}
                bookAuthors={el.authors ? el.authors[0] : ""}
                bookImage={el.imageLinks && el.imageLinks.thumbnail}
                onHandleChange={onHandleChange}
              />
            ))}
        </ol>
      </div>
    </div>
  );
}
export default Search;
