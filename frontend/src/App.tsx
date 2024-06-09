import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ReadingList from "./components/readingList";
import SearchBar from "./components/search";
import { Book } from "./types";

const App = () => {
  const [readingList, setReadingList] = useState<Book[]>(
    JSON.parse(localStorage.getItem("readingList") || "[]")
  );

  const addToReadingList = (book: Book) => {
    const isBookInList = readingList.some((b) => b === book);
    if (isBookInList) return;

    setReadingList([...readingList, book]);
  };

  const removeFromReadingList = (book: Book) => {
    setReadingList(readingList.filter((b) => b !== book));
  };

  useEffect(() => {
    const savedReadingList = localStorage.getItem("readingList");
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("readingList", JSON.stringify(readingList));
  }, [readingList]);

  return (
    <Container sx={{ cursor: "pointer" }}>
      <Box sx={{ display: "flex", padding: "20px" }}>
        <Typography variant="h6">Reading List App</Typography>

        <Chip
          avatar={<Avatar alt="Natacha" src="/assets/image1.webp" />}
          label="Cetrick"
          variant="outlined"
          sx={{ marginLeft: "auto" }}
        />
      </Box>

      <Box sx={{ display: "flex", padding: "10px" }}>
        <Button startIcon={<ArrowBackIcon />}>Back to reading sets</Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", placeItems: 'center' }} gap={2}>
        <Typography variant="h5">
          Grade 1 Reading List
        </Typography>

        <SearchBar
          addToReadingList={addToReadingList}
          readingList={readingList}
        />

        <Box sx={{ padding: "20px", flexGrow: 1 }}>
          <ReadingList
            readingList={readingList}
            removeFromReadingList={removeFromReadingList}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
