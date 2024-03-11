import { useState, useEffect } from 'react';
import Book from '../models/Book';
import { getBooks } from '../services/bookService';
import Gallery from './Gallery';
import './BookList.css'

const BookList = () => {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response.items);
    });
  }, [])

  return (
  <div className="BookList">
    <Gallery books={books} />
  </div>
  )
};

export default BookList;
