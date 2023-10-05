import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function FavoritesList() {
  return (
    <div>
      <h2>Favorites Page</h2>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            Title of Image
          </Typography>
          Image BODY
          <br />
          <br />
          <br />
          <br />
          <Typography variant="captions">Image caption</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

{
  /* <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Change Me</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Table Cell-ChangeME</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer> */
}
