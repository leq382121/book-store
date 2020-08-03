const API_URL = "http://localhost:3011";
const BOOK_SCHEMA = {
  authors: {
    birth_year: "birth_year",
    death_year: "death_year",
    name: "name"
  },
  bookshelves: "bookshelves",
  download_count: "download_count",
  languages: "languages",
  subjects: "subjects",
  title: "title"
}

export { API_URL, BOOK_SCHEMA };
