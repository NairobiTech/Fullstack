import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import BackButton from "./components/BackButton";
import Header from "./components/Header";
import ReadingList from "./components/readingList";
import SearchBar from "./components/search";
import SnackBar from "./components/SnackBar";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./lib/helpers";
import { IBook, ISnackBarOptions } from "./lib/types";

const App = () => {
  const [readingList, setReadingList] = useState<IBook[]>(
    getDataFromLocalStorage("readingList") ?? []
  );

  const [snackBarOptions, setSnackBarOptions] = useState<ISnackBarOptions>({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const savedReadingList = localStorage.getItem("readingList");
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }
  }, []);

  useEffect(() => {
    setDataToLocalStorage("readingList", readingList);
  }, [readingList]);

  const addBookToReadingList = (book: IBook) => {
    const isBookInList = readingList.some((b) => b === book);
    if (isBookInList) return;

    setReadingList([...readingList, book]);
    setSnackBarOptions({
      open: true,
      message: `Added ${book.title} to reading list`,
      severity: "success",
    });
  };

  const removeBookFromReadingList = (book: IBook) => {
    setReadingList(readingList.filter((b) => b !== book));
    setSnackBarOptions({
      open: true,
      message: `Removed ${book.title} from reading list`,
      severity: "success",
    });
  };

  return (
    <Container sx={{ cursor: "pointer" }}>
      <SnackBar options={snackBarOptions} setOptions={setSnackBarOptions} />

      <Header />
      <BackButton />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          pb: 4,
        }}
        gap={2}
      >
        <Typography variant="h5">Grade 1 Reading List</Typography>

        <SearchBar
          addBookToReadingList={addBookToReadingList}
          readingList={readingList}
        />

        <ReadingList
          readingList={readingList}
          removeBookFromReadingList={removeBookFromReadingList}
        />
      </Box>
    </Container>
  );
};

export default App;
