import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Book } from "../../types";

const BookCard = ({
  book,
  removeFromReadingList,
}: {
  book: Book;
  removeFromReadingList: (book: Book) => void;
}) => (
  <Card sx={{ minWidth: 275 }}>
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
);

export default BookCard;
