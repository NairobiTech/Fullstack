export interface IBook {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

export interface ISingleResultCardProps {
  book: IBook & { isInReadingList: boolean };
  addBookToReadingList: (book: IBook) => void;
}

export interface ISearchBarProps {
  readingList: IBook[];
  addBookToReadingList: (book: IBook) => void;
}

export interface IReadingListProps {
  readingList: IBook[];
  removeBookFromReadingList: (book: IBook) => void;
}

export interface IBookWithReadingListStatus extends IBook {
  isInReadingList: boolean;
}

export interface ISnackBarOptions {
  severity: "success" | "error" | "warning" | "info";
  message: string;
  open: boolean;
}

export interface ISnackBarProps {
  options: ISnackBarOptions;
  setOptions: (options: ISnackBarOptions) => void;
}

export interface ISearchEndAdornmentProps {
  searchQuery: string;
  loading: boolean;
  resetSearchQueries: () => void;
}
