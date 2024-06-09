import Grid from "@mui/material/Unstable_Grid2";

import Book from "./Book";
import { Book as IBook, ReadingListProps } from "../../types";

const ReadingList = ({
  readingList,
  removeFromReadingList,
}: ReadingListProps) => (
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {readingList.map((book: IBook, index: number) => (
        <Book key={index} book={book} removeFromReadingList={removeFromReadingList} />
    ))}
  </Grid>
);

export default ReadingList;
