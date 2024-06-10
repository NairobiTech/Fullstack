import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import Logo from "./logo.svg";
import ReadingList from "./components/readingList";
import SearchBar from "./components/search";
import SnackBar from "./components/SnackBar";
import { Book, SnackBarOptions } from "./types";

const App = () => {
  const [readingList, setReadingList] = useState<Book[]>(
    JSON.parse(localStorage.getItem("readingList") || "[]")
  );
  const [snackBarOptions, setSnackBarOptions] = useState<SnackBarOptions>({
    open: false,
    message: "",
    severity: "success",
  });

  const isSmallDevice = useMediaQuery("(max-width:600px)");

  const addToReadingList = (book: Book) => {
    const isBookInList = readingList.some((b) => b === book);
    if (isBookInList) return;

    setReadingList([...readingList, book]);
    setSnackBarOptions({
      open: true,
      message: `Added ${book.title} to reading list`,
      severity: "success",
    });
  };

  const removeFromReadingList = (book: Book) => {
    setReadingList(readingList.filter((b) => b !== book));
    setSnackBarOptions({
      open: true,
      message: `Removed ${book.title} from reading list`,
      severity: "success",
    });
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
    <>
      <Container sx={{ cursor: "pointer" }}>
        <SnackBar options={snackBarOptions} setOptions={setSnackBarOptions} />

        <Box sx={{ display: "flex", padding: "20px", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
            <img src={Logo} alt="logo" width={50} height={50} />
            <Typography variant="h5" fontSize='bold' mt={1}>Teachers</Typography>
          </Box>

          <Chip
            avatar={<Avatar alt="Natacha" src="/assets/image1.webp" />}
            label="Cetrick"
            variant="outlined"
            sx={{ marginLeft: "auto" }}
          />
        </Box>

        {!isSmallDevice && (
          <Box sx={{ display: "flex", padding: "10px" }}>
            <Tooltip title="This Link is for demo purposes, it does not lead to a page." placement="bottom">
              <Button startIcon={<ArrowBackIcon />}>
                Back to reading sets
              </Button>
            </Tooltip>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            placeItems: "center",
          }}
          gap={2}
        >
          <Typography variant="h5">Grade 1 Reading List</Typography>

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
    </>
  );
};

export default App;
