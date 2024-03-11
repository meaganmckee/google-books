import Book from '../models/Book';
import './BookCard.css'

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <li className='BookCard'>
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.authors}</p>
        <p>{book.volumeInfo.description}</p>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
    </li>
  )
};

export default BookCard;
