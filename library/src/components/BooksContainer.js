import React from "react";
import Cards from "./Cards";
import AddBookForm from "./AddBookForm";

const BooksContainer = ({ booksDb, handleAddBook }) => {
  return (
    <div className="main">
      <Cards booksDb={booksDb} />
      <AddBookForm handleAddBook={handleAddBook} />
    </div>
  );
};

export default BooksContainer;
