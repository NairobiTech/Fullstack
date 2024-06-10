import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { IBook } from "../../lib/types";

interface BookCardProps {
  book: IBook;
  removeBookFromReadingList: (book: IBook) => void;
}

const BookCard = ({ book, removeBookFromReadingList }: BookCardProps) => (
  <Card raised>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={book.coverPhotoURL}
        alt={book.title}
      />
      <CardContent sx={{ height: 150 }}>
        <Typography gutterBottom variant="h6" component="div">
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
        onClick={() => removeBookFromReadingList(book)}
      >
        Remove From Reading List
      </Button>
    </CardActions>
  </Card>
);

export default BookCard;
