import React from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const history = useHistory();

  const handleClick = () => {

    history.push(`/category`);
  };

  return (
    <div className="card">
      <Card>
        <CardContent>
          <TextField type="text" value="" placeholder="Search" ></TextField>
          <div className="search-button">
            <Button variant="contained" type="submit" onClick={(e) => dispatch({ type: "ADD_Category", payload: e.target.value })}>
              SEARCH
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
//
// response from giphy res.send