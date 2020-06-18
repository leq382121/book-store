import React from "react";
import Cards from "./CardsContainer";
import AddBookForm from "./AddBookForm";

const BooksContainer = (props) => {
  return (
    <div className="main">
      <Cards booksDb={props.booksDb} />
      <AddBookForm handleAddBook={props.handleAddBook} booksType={props.booksType} addNewGenre={props.addNewGenre} />
    </div>
  );
};

export default BooksContainer;
