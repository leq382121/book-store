import React, { useState, useEffect } from "react";
import Header from "./Header";
import GetBooks from "./GetBooks";
import { API_URL } from "../constants/global";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [booksType, setBooksType] = useState([]);
  const [isBooksLoaded, setIsBooksLoaded] = useState(false);

  // hooks'ai - klasiu alterantyva, funkcin. komponentuose.
  useEffect(() => {
    const getTypes = async () => {
      const types = await fetch(API_URL + "/subjects").then((res) =>
        res.json()
      );

      setBooksType(types);
      setIsBooksLoaded(true);
      console.log(types);
    };

    getTypes();
  }, []);

  // isfetchinti knygu tipus.
  // sukisti juos i dropdowna.
  // submtitinti forma ir pagal tai routingu atidarytiar kita puslapi.
  // (reducer)

  return (
    <Router>
      {isBooksLoaded ? "loaded" : "loading"}

      {booksType.map((item) => {
        return (
          <li>
            <Link to={`/genre/${item}`}>{item}</Link>
          </li>
        );
      })}

      <Switch>
        <Route path="/genre/:genreId" component={GetBooks}></Route>
      </Switch>
    </Router>
  );
}

export default App;
