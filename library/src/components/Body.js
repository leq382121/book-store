import React from 'react';
import Cards from './Cards';
import AddBookForm from './AddBookForm';

const Body = ({booksdb, handleAddBook}) => {
  return (
    <div className="main">
      <Cards booksdb={booksdb}/>
      <AddBookForm handleAddBook={handleAddBook} />
    </div>
  );
}

export default Body;
