import { booksData } from '../data/books';

interface QueryBooksArgs {
  title?: string;
}

export const resolvers = {
  Query: {
    books: (_: unknown, { title }: QueryBooksArgs) => {
      if (title) {
        return booksData.filter(book =>
          book.title.toLowerCase().includes(title.toLowerCase())
        );
      }
      return booksData;
    },
  },
};
