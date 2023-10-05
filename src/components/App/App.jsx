import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Form from "../Form/Form";
import FavoritesList from "../FavoritesList/FavoritesList";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4">Giphy Search</Typography>
            <div className="links">
              <Link to="/">
                
                <FontAwesomeIcon icon={faHome} size="1x" />{" "}
                {/* Display the Home icon */}
              </Link>
              <Link to="/form">
                {" "}
                <FontAwesomeIcon icon={faList} size="1x" />{" "}
                {/* Display the List icon */}
              </Link>
              <Link to="/favorites">Favorite</Link>
            </div>
          </Toolbar>
        </AppBar>
        <Route exact path="/">
          {/* need to fill in component here */}
        </Route>
        <Route exact path="/favorites">
          <FavoritesList />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </div>
    </Router>
  );
}

export default App;
