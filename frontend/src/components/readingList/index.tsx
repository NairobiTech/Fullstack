import Grid from "@mui/material/Grid";

import BookCard from "./BookCard";
import { IBook, IReadingListProps } from "../../lib/types";

const ReadingList = ({
  readingList,
  removeBookFromReadingList,
}: IReadingListProps) => (
  <Grid
    container
    spacing={{ xs: 2, md: 2 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
    sx={{ pt: 2 }}
  >
    {readingList.map((book: IBook, index: number) => (
      <Grid item xs={4} sm={4} md={4} key={index}>
        <BookCard
          book={book}
          removeBookFromReadingList={removeBookFromReadingList}
        />
      </Grid>
    ))}
  </Grid>
);

export default ReadingList;
