import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";

export default function Form() {
    return (
        <div>
            <Card>
                <CardContent>
                    <TextField type="text" value="" placeholder="Search"></TextField>
                    <Button variant="contained">ADD Image</Button>
                </CardContent>
            </Card>
        </div>
    );
}