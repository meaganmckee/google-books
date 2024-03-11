interface Items {
  items: Book[];
}

export default interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks:{
      thumbnail: string;
    }
  }
}