import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
// import Form from "../Form/Form";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>

        <Route exact path="/">
          {/* insert component later*/}
        </Route>
        <Route path="/form">
          {/* <Form /> */}
        </Route>
      </div>
    </Router>
  );
}

export default App;
