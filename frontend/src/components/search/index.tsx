import { useState, useMemo, useCallback } from "react";
import { useQuery, gql } from "@apollo/client";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import debounce from "lodash/debounce";

import { Book as IBook, BookWithReadingListStatus } from "../../types";
import Book from "./Book";
import EndAdornment from "./EndAdornment";

const GET_BOOKS = gql`
  query GetBooks($title: String) {
    books(title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const Search = ({
  addToReadingList,
  readingList,
}: {
  readingList: IBook[];
  addToReadingList: (book: IBook) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const { loading, data } = useQuery(GET_BOOKS, {
    variables: { title: debouncedQuery },
    skip: !debouncedQuery || debouncedQuery.length < 3,
  });

  // Create a debounced function for setting the search query
  const debounceSearch = useMemo(
    () =>
      debounce((query: string) => {
        setDebouncedQuery(query);
      }, 500),
    []
  );

  // Handle input change and debounce the search query update
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    debounceSearch(value);
  };

  const resetSearchQueries = () => {
    setSearchQuery("");
    setDebouncedQuery("");
  };

  const handleAddToReadingList = useCallback(
    (book: IBook) => {
      addToReadingList(book);
      resetSearchQueries();
    },
    [addToReadingList]
  );

  const mapIsInReadingList = data?.books.map((book: IBook) => {
    return {
      ...book,
      isInReadingList: readingList.some((b) => b.title === book.title),
    };
  });

  return (
    <ClickAwayListener onClickAway={resetSearchQueries}>
      <Box
        sx={{
          width: "80%",
          pt: 5,
          ml: "auto",
          mr: "auto",
          position: "relative",
        }}
      >
        <TextField
          fullWidth
          label="Search Books By Title To Add To Reading List"
          value={searchQuery}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <EndAdornment
                searchQuery={searchQuery}
                loading={loading}
                resetSearchQueries={resetSearchQueries}
              />
            ),
          }}
          placeholder="Type at least 3 characters to search"
          autoComplete="off"
        />
        {searchQuery && (
          <Paper
            sx={{
              position: "absolute",
              width: "100%",
              maxHeight: 500,
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            <List>
              {mapIsInReadingList?.length > 0 ? (
                mapIsInReadingList?.map(
                  (book: BookWithReadingListStatus, index: number) => (
                    <ListItem key={index}>
                      <Book
                        book={book}
                        addToReadingList={handleAddToReadingList}
                      />
                    </ListItem>
                  )
                )
              ) : (
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <p>{loading ? "Loading" : "No books found"}</p>
                  </Box>
                </ListItem>
              )}
            </List>
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default Search;
