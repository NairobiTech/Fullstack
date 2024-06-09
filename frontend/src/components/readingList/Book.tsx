import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { Book as IBook } from "../../types";

const Book = ({
  book,
  removeFromReadingList,
}: {
  book: IBook;
  removeFromReadingList: (book: IBook) => void;
}) => (
  <Grid xs={4} sm={4} md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.coverPhotoURL}
          alt={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {book.author}
          </Typography>
          <Typography variant="body2" color="text.primary" component="div">
            Reading Level: {book.readingLevel}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<RemoveIcon />}
          onClick={() => removeFromReadingList(book)}
        >
          Remove From Reading List
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

export default Book;
