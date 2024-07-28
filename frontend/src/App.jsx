import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='https://the-book-vault.onrender.com/' element={<Home />} />
      <Route path='https://the-book-vault.onrender.com/books/create' element={<CreateBook />} />
      <Route path='https://the-book-vault.onrender.com/books/details/:id' element={<ShowBook />} />
      <Route path='https://the-book-vault.onrender.com/books/edit/:id' element={<EditBook />} />
      <Route path='https://the-book-vault.onrender.com/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
