import React from "react";
import Card from "./Card";

const Cards = ({ booksDb }) => {
  console.log(booksDb);

  return (
    <div>
      <center>
        <h1>Book list</h1>
      </center>

      {booksDb.map((book) => (
        <Card book={book} key={book.id} />
      ))}
    </div>
  );
};

// buttonas yra kazkoks
// paspaiudus tekstas tampa laukeliu
// ivedu nauja teksta
// subtimtas pakeicia ta teksta api'juje.

export default Cards;
