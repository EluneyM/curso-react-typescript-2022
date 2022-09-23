import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Book {
  id: number,
  title: string,
  description: string,
  cover: string
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
            try {
              const res = await fetch('http://localhost:8800/books', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json());
                setBooks(res);
            } catch(err) {
              console.log(err);
            }
        }
    fetchAllBooks();
  },[]);

  const handleDelete = async(id: number) => {
        try {
          await fetch(`http://localhost:8800/books/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
          window.location.reload(); 
        } catch (err) {
          console.log(err);
        }
    };

  return (<div>
            <button><Link to="store">Agregar libro</Link></button>
            <h1>Listado de libros</h1>  
            <div className="books">{ books.map((book: Book) => (
              <div className="book" key={book.id}>
                <div>
                  <button className="delete" onClick={() => handleDelete(book.id)}>Borrar</button>
                  <button className="update"><Link to={`update/${book.id}`}>Actualizar</Link></button>
                </div>
                {book.cover && <img src={book.cover} alt=""/>}
                <h2>{book.title}</h2>
                <p>{book.description}</p>
              </div>)) }
            </div>
        </div>);
}

export default BookList;
