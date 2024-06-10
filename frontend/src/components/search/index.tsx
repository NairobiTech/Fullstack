import { useState, useMemo, useCallback } from "react";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import debounce from "lodash/debounce";

import { GET_BOOKS } from "../../lib/graphql/queries";
import {
  IBook,
  IBookWithReadingListStatus,
  ISearchBarProps,
} from "../../lib/types";
import SingleResultCard from "./SingleResultCard";
import EndAdornment from "./EndAdornment";

const Search = ({ addBookToReadingList, readingList }: ISearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const { loading, data } = useQuery(GET_BOOKS, {
    variables: { title: debouncedQuery },
    skip: !debouncedQuery || debouncedQuery.length < 3,
  });

  const debounceSearch = useMemo(
    () =>
      debounce((query: string) => {
        setDebouncedQuery(query);
      }, 500),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    debounceSearch(value);
  };

  const resetSearchQueries = () => {
    setSearchQuery("");
    setDebouncedQuery("");
  };

  const handleaddBookToReadingList = useCallback(
    (book: IBook) => {
      addBookToReadingList(book);
      resetSearchQueries();
    },
    [addBookToReadingList]
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
                  (book: IBookWithReadingListStatus, index: number) => (
                    <ListItem key={index}>
                      <SingleResultCard
                        book={book}
                        addBookToReadingList={handleaddBookToReadingList}
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
