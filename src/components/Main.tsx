import BookList from './BookList';
import './Main.css'
import Search from './Search';

const Main = () => {
  return (
    <div className='Main'>
      <Search />
      <BookList />
    </div>
  )
};

export default Main;
