import React, { useState } from 'react';
import Card from './Card';

const Cards = ({booksdb}) => {
  console.log(booksdb);

  return (
    <div>
      <center><h1>Book list</h1></center>

      {booksdb.map((book) => (
        <Card book={book}
              key={book.id}/>
      ))}

    </div>
  );
}

// buttonas yra kazkoks
// paspaiudus tekstas tampa laukeliu
// ivedu nauja teksta
// subtimtas pakeicia ta teksta api'juje. 


export default Cards;
