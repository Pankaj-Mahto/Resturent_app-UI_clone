import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Login from './pages/Login';
import Book from './pages/Book';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
          </div>
        }
      />

      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Book Table page */}
      <Route path="/book" element={<Book />} />
    </Routes>
  </Router>
);

export default App;
