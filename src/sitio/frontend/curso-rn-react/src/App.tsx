import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './pages/Books/BookList';
import BookStore from './pages/Books/BookStore';
import BookUpdate from './pages/Books/BookUpdate';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<BookList/>}/>
          <Route path="/books/store" element={<BookStore/>}/>
          <Route path="/books/update/:id" element={<BookUpdate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
