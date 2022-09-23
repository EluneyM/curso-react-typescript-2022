import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Book {
    id: number,
    title: string,
    description: string,
    cover: string
}

const BookUpdate = () => {
    const location = useLocation();
    const url = location.pathname.split("/");
    const bookId = url[url.length - 1];

    const [book, setBook] = useState({
        title:"",
        description:"",
        cover:"",
    });
    const findBookById = async () => {
      await fetch('http://localhost:8800/books/' + bookId, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json'
                        },
                    })
                    .then(response => response.json())
                    .then(data => setBook(data[0]));
    } 

    useEffect(() => {
        findBookById();
    }, []);

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setBook(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e: any) => {
        e.preventDefault();
        try {
          await fetch('http://localhost:8800/books/'+bookId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(book)
            })
            .then(response => response.json());
          navigate("/books"); 
        }catch(err){
          console.log(err) 
        }
    };

    return (
      <div>
        <h1>Actualizar el libro</h1>
        <div className="form">
          <input 
            onChange={handleChange} 
            type="text" 
            value={book.title}
            placeholder="titulo" 
            name="title"/>
          <input 
            onChange={handleChange} 
            type="text" 
            value={book.description}
            placeholder="descripción" 
            name="description"/>
          <input 
            onChange={handleChange} 
            type="text" 
            value={book.cover}
            placeholder="cover" 
            name="cover" />
          <button onClick={handleClick}>Actualizar</button>
        </div>
      </div>    
    );
}

export default BookUpdate;
