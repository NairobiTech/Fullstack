export interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

export interface BookListProps {
  books: Book[];
  addToReadingList: (book: Book) => void;
}

export interface SearchBarProps {
  books: Book[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface ReadingListProps {
  readingList: Book[];
  removeFromReadingList: (book: Book) => void;
}

export interface BookWithReadingListStatus extends Book {
  isInReadingList: boolean;
}

export interface SnackBarOptions {
  severity: "success" | "error" | "warning" | "info";
  message: string;
  open: boolean;
}
