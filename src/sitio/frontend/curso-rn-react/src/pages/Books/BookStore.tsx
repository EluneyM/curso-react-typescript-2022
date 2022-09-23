import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookStore = () => {
    const [book, setBook] = useState({
        title:"",
        description:"",
        cover:"",
    });

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setBook(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async (e: any) => {
        e.preventDefault();
        try {
          await fetch('http://localhost:8800/books', {
                method: 'POST',
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
        <h1>Agrega un libro</h1>
        <div className="form">
          <input onChange={handleChange} type="text" placeholder="titulo" name="title"/>
          <input onChange={handleChange} type="text" placeholder="descripción" name="description"/>
          <input onChange={handleChange} type="text" placeholder="cover" name="cover" />
          <button onClick={handleClick}>Agregar</button>
        </div>
      </div>    
    );
}

export default BookStore;
