import React, { useState, useEffect } from "react";
import Header from "./static/Header";
import GetBooks from "./functional/GetBooks";
import { API_URL } from "../constants/global";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [booksType, setBooksType] = useState(["/"]);

  const addNewGenre = (newGenre) => {
    setBooksType([...booksType, newGenre])
  }

  useEffect(() => {

    /**
     *  Fetching data from Books API
     * 
     */

    const getTypes = async () => {
      const types = await fetch(API_URL + "/subjects").then((res) =>
        res.json()
      );

      /**
       *  Updating hook state
       * 
       */

      setBooksType(types);
    };

    getTypes();
  }, []);




  // (reducer)

  return (
    (<Header />),
    (
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
          <Route path="/genre/:genreId"
            render={(props) => { return <GetBooks {...props} booksType={booksType} addNewGenre={addNewGenre} /> }} ></Route>
        </Switch>
      </Router>
    )
  );
}

export default App;
