import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "./Form.css";

export default function Form() {
  const [newInput, setNewInput] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log("handleClick", e);
    e.preventDefault();

    dispatch({
      type: "FETCH_SEARCH",
      payload: newInput,
    });
    history.push(`/category`);
    console.log("logging newInput", newInput);
    setNewInput("");
  };

  return (
    <div className="card-container">
      <div className="card">
        <Card>
          <CardContent style={{ backgroundColor: "rgb(102, 150, 246)" }}>
            <br />
            <TextField
              type="text"
              value={newInput}
              placeholder="Search Giphy Gifs..."
              onChange={(event) => setNewInput(event.target.value)}
              style={{ width: "100%", backgroundColor: "ghostwhite" }}
            ></TextField>
            {/* <input type="text" value={newInput} onChange={(event) => setNewInput(event.target.value)}></input> */}
            <div className="search-button">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                onClick={handleClick}
                style={{ backgroundColor: "rgb(160, 204, 183)", color: "bla" }}

              >
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="giphy">
        <iframe
          src="https://giphy.com/embed/NS7gPxeumewkWDOIxi"
          width="480"
          height="270"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/detectivepikachumovie-NS7gPxeumewkWDOIxi">
            via GIPHY
          </a>
        </p>
      </div>
    </div>
  );
}
//
// response from giphy res.send
