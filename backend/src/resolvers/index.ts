import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    books: (_: unknown, { title }: {title?: string}) => {
      if (title) {
        return booksData.filter(book =>
          book.title.toLowerCase().includes(title.toLowerCase())
        );
      }
      return booksData;
    },
  },
};
