import React from 'react';
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
    }

    return (
        <div className="card">
            <Card>
                <CardContent>
                    <TextField type="text" value="" placeholder="Search"></TextField>
                    <Button variant="contained" onClick={handleClick}>ADD Image</Button>
                </CardContent>
            </Card>
        </div>
    );
}