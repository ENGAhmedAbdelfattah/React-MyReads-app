/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";

function Book({
  bookTitle,
  bookAuthors,
  bookImage,
  book,
  onHandleChange,
  onHandleSelectClicked,
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
            <select
              onChange={(e) => onHandleChange(book, e)}
              value="none"
              onClick={onHandleSelectClicked}>
              <option value="none" disabled>
                {book.shelf !== "none" && book.shelf !== undefined
                  ? "Move to..."
                  : "Add to..."}
              </option>
              <option value="currentlyReading">
                {book.shelf === "currentlyReading"
                  ? "✓ Currently Reading"
                  : "Currently Reading"}
              </option>
              <option value="wantToRead">
                {book.shelf === "wantToRead"
                  ? "✓ Want to Read"
                  : "Want to Read"}
              </option>
              <option value="read">
                {book.shelf === "read" ? "✓ Read" : "Read"}
              </option>
              {/* {console.log(book.shelf)} */}
              {book.shelf !== "none" && book.shelf !== undefined && (
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
