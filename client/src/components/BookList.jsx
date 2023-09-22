import { useEffect, useState} from "react";
import { getAllBooks } from '../api/books.api'
import { BookCard } from './BookCard'

export function BookList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            const res = await getAllBooks()
            setBooks(res.data)
        }

        loadBooks();
    }, [])

    return <div className="grid grid-cols-3 gap-3">
        {
            books.map(book => (
                <BookCard key={book.id} book={book}/>
            ))
        }
    </div>;
  
}

