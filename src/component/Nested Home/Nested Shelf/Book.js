/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";

function Book({
  shelf,
  bookTitle,
  bookAuthors,
  bookImage,
  book,
  onHandleChange,
}) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: bookImage ? `url(${bookImage})` : "",
            }}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => onHandleChange(book, e)} value="none">
              <option value="none" disabled>
                {window.location.pathname === "/" && "Move to..."}
                {window.location.pathname === "/search" && "Add to..."}
              </option>
              <option value="currentlyReading">
                {shelf === "currentlyReading"
                  ? "✓ Currently Reading"
                  : "Currently Reading"}
              </option>
              <option value="wantToRead">
                {shelf === "wantToRead" ? "✓ Want to Read" : "Want to Read"}
              </option>
              <option value="read">
                {shelf === "read" ? "✓ Read" : "Read"}
              </option>
              {window.location.pathname === "/" && (
                <option value="none">None</option>
              )}
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle ? bookTitle : ""}</div>
        <div className="book-authors">{bookAuthors ? bookAuthors : ""}</div>
      </div>
    </li>
  );
}
export default Book;

