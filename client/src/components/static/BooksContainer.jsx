import React from "react";
import Cards from "./CardsContainer";
import AddBookForm from "../functional/AddBookForm";

const BooksContainer = (props) => {
  return (
    <div className="main">
      <Cards booksState={props.booksState} />

      <AddBookForm
        handleAddBook={props.handleAddBook}
        booksType={props.booksType}
      />
    </div>
  );
};

export default BooksContainer;
