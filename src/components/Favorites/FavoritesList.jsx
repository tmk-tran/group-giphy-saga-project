import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function FavoritesList() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          These are the favorites
        </Typography>
      </CardContent>
    </Card>
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
