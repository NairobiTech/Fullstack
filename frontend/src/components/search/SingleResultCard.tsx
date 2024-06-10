import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ISingleResultCardProps } from "../../lib/types";

const SingleResultCard = ({
  book,
  addBookToReadingList,
}: ISingleResultCardProps) => {
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ display: "flex" }} gap={2}>
      {!isSmallDevice && (
        <Avatar
          variant="square"
          alt={book.title}
          src={book.coverPhotoURL}
          sx={{ width: 100, height: 100 }}
        />
      )}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {book.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            By: {book.author}
          </Typography>
        </Box>
        {book.isInReadingList ? (
          <Typography variant="body2" color="text.primary" component="div">
            Already in Reading List
          </Typography>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ width: 220 }}
            onClick={() =>
              addBookToReadingList({
                title: book.title,
                author: book.author,
                coverPhotoURL: book.coverPhotoURL,
                readingLevel: book.readingLevel,
              })
            }
          >
            Add to Reading List
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SingleResultCard;
