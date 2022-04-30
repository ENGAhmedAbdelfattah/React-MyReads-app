/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import Book from "./Nested Shelf/Book";

function Shelf({ shelf, books, onHandleChange }) {
  /* use bookshelves State to styled header */
  const header = `${shelf.charAt(0).toUpperCase()}${shelf
    .slice(1)
    .split("")
    .map((el) => (el === el.toUpperCase() ? (el = ` ${el}`) : el))
    .join("")}`;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* use bookshelves State to filter books*/}
          {Array.isArray(books) &&
            books
              .filter((el) => shelf === el.shelf)
              .map((el) => (
                <Book
                  key={el.id}
                  shelf={shelf}
                  book={el}
                  bookTitle={el.title}
                  bookAuthors={el.authors[0]}
                  bookImage={el.imageLinks.thumbnail}
                  onHandleChange={onHandleChange}
                />
              ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
