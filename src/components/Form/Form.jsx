import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const [newInput, setNewInput] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log("handleClick");
    e.preventDefault();

    dispatch({
      type: "ADD_CATEGORY",
      payload: {
        newInput: newInput,
      },
    });
    history.push(`/category`);
    console.log(newInput);
  };

  return (
    <div className="card">
      <Card>
        <CardContent>
          <TextField
            type="text"
            value=""
            placeholder="Search"
            onSubmit={(event) => setNewInput(event.target.value)}
          ></TextField>
          <div className="search-button">
            <Button variant="contained" type="submit" onClick={handleClick}>
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
