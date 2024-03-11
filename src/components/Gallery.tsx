import Book from '../models/Book';
import BookCard from './BookCard';
import './Gallery.css'

interface Props {
  books: Book[];
}

const Gallery = ({ books }: Props) => {
  return (
    <div className='Gallery'>
        <ul>
          {books.map((book)=>(
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
    </div>
  )
};

export default Gallery;
