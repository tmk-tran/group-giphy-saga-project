import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Form from "../Form/Form";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
// import FavoritesList from "../FavoritesList/FavoritesList"

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4">Giphy Search</Typography>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/form">Form</Link>
            </div>
          </Toolbar>
        </AppBar>

        <Route exact path="/favorites">
          {/* <FavoritesList /> */}
          {/* insert component later*/}
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </div>
    </Router>
  );
}

export default App;
