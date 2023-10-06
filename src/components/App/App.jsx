import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Form from "../Form/Form";
import FavoritesList from "../FavoritesList/FavoritesList";
// import CategoryList from "../CategoryList/CategoryList";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4">Giphy Search</Typography>
            <div className="links">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} size="1x" />{" "}
                {/* Display the Home icon */}
              </Link>
              <Link to="/category">
                {" "}
                <FontAwesomeIcon icon={faList} size="1x" />{" "}
                {/* <CategoryList/> */}
              </Link>
              <Link to="/favorites">
                {" "}
                <FontAwesomeIcon icon={faHeart} size="1x" color="red" />{" "}
                {/* Display the Favorite icon */}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Header />
        <Route exact path="/">
          <Form />
        </Route>
        <Route exact path="/category"></Route>
        <Route path="/favorites">
          <FavoritesList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
