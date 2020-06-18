import React from "react";
import { BOOK_SCHEMA } from './../../constants/global'

function AddBookForm({ handleAddBook, booksType }) {

  const handleSubmit = (event) => {
    event.preventDefault(); //disabling default submit function

    const formSelector = (selector) => { return event.target.querySelector(`[name=${selector}]`).value }
    const book = {
      title: formSelector(BOOK_SCHEMA.title),
      subjects: formSelector(BOOK_SCHEMA.subjects),
    };

    handleAddBook(book);

    // clearing form
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Add New Book Title </label>
      <input name={BOOK_SCHEMA.title} type="text" />
      <br />


      {/* <label> Add Book Authors</label>
      <input name={BOOK_SCHEMA.authors} type="text" placeholder={} />
      <br /> */}

      {/* <div className="addAuthor" onClick={}>Add Additional Author</div> */}

      <label> Add Book Subjects</label>

      {/* later let's add functionality for adding more subjects*/}
      <select name={BOOK_SCHEMA.subjects}>
        {booksType.map((type) => {
          return <option value={type}>{type}</option>
        })}
      </select>

      <br />
      <input type="submit"></input>
    </form>
  );
}

export default AddBookForm;


// {  
//   "id":74,
//   "authors":[  
//      {  
//         "birth_year":1835,
//         "death_year":1910,
//         "name":"Twain, Mark"
//      }
//   ],
//   "bookshelves":[  
//      "Banned Books from Anne Haight's list"
//   ],
//   "download_count":16204,
//   "formats":{  
//      "image/jpeg":"http://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg",
//      "text/plain; charset=utf-8":"http://www.gutenberg.org/files/74/74-0.zip",
//      "application/rdf+xml":"http://www.gutenberg.org/ebooks/74.rdf",
//      "application/x-mobipocket-ebook":"http://www.gutenberg.org/ebooks/74.kindle.images",
//      "application/epub+zip":"http://www.gutenberg.org/ebooks/74.epub.noimages",
//      "text/html; charset=utf-8":"http://www.gutenberg.org/files/74/74-h/74-h.htm",
//      "text/plain; charset=iso-8859-1":"http://www.gutenberg.org/files/74/74.txt",
//      "application/zip":"http://www.gutenberg.org/files/74/74.zip"
//   },
//   "languages":[  
//      "en"
//   ],
//   "media_type":"Text",
//   "subjects": ["Science"],
//   "title":"The Adventures of Tom Sawyer"
// }
