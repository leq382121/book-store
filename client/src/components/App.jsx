import React, { useState, useEffect } from "react";
import GetBooks from "./functional/GetBooks";
import { API_URL } from "../constants/global";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/**
 *
 * Later:
 * https://jestjs.io/
 * https://storybook.js.org/docs/basics/introduction/
 *
 * Next Steps:
 * Fix AddBookForm - done
 * Make Books fully Editable (For the elements what makes sense)
 *
 */

function App() {
  const [booksType, setBooksType] = useState([]);

  useEffect(() => {
    // Fetching data from Books API
    const getTypes = async () => {
      const types = await fetch(API_URL + "/subjects").then((res) =>
        res.json()
      );

      // Updating hook state
      setBooksType(types);
    };

    getTypes();
  }, []);

  return [
    <Router>
      <li>
        <Link to="/" exact="true">
          Home
        </Link>
      </li>

      {booksType.map((item) => (
        <li key={item}>
          <Link to={`/genre/${item}`}>{item}</Link>
        </li>
      ))}

      <Switch>
        <Route
          path="/genre/:BookSubject"
          render={(props) => {
            return <GetBooks {...props} booksType={booksType} />;
          }}
        ></Route>
      </Switch>
    </Router>,
  ];
}

export default App;
