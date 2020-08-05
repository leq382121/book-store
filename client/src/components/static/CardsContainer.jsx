import React from "react";
import Card from "../functional/Card";

const CardsContainer = ({ booksState }) => {
  return (
    <>
      <center>
        <h1>Book list</h1>
      </center>

      {booksState.map((book) => (
        <Card book={book} key={book.id} />
      ))}
    </>
  );
};

export default CardsContainer;
