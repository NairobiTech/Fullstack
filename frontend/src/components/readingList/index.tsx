import Grid from "@mui/material/Unstable_Grid2";

import BookCard from "./BookCard";
import { Book, ReadingListProps } from "../../types";

const ReadingList = ({
  readingList,
  removeFromReadingList,
}: ReadingListProps) => (
  <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {readingList.map((book: Book, index: number) => (
      <Grid xs={4} sm={4} md={4} key={index}>
        <BookCard book={book} removeFromReadingList={removeFromReadingList} />
      </Grid>
    ))}
  </Grid>
);

export default ReadingList;
