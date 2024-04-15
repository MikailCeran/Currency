import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import {Converter, pageTitle}  from './Converter';
import { About } from './About';

function App() {
  return (
    <Provider store={store}>
      <header>
        <h1>
          Header
        </h1>
      </header>
      <Router>
        <div>
          <Title text={pageTitle}/>
          <nav>
            <ul>
              <li>
                <Link to="/">Converter</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Converter />} /> 
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <footer>
        <h1>
          Footer
        </h1>
      </footer>
    </Provider>
  );
}

function Title({text}) {
  return <h1>{text}</h1>;
}

export default App;
