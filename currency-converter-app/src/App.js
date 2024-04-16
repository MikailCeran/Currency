import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Converter, pageTitle } from './Converter';
import { About } from './About';
import { LiveExchanges } from './LiveExchanges';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <header className="bg-primary text-white p-3">
        <h1 className="text-center">
          Header
        </h1>
      </header>
      <Router>
        <div className="container mt-4">
          <Title text={pageTitle} />
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Converter</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/liveexchanges" className="nav-link">LiveExchanges</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/about" element={<About />} />
            <Route path="/liveexchanges" element={<LiveExchanges />} />
          </Routes>
        </div>
      </Router>
      <footer className="bg-primary text-white p-3 mt-4">
        <h1 className="text-center">
          Footer
        </h1>
      </footer>
    </Provider>
  );
}

function Title({ text }) {
  return <h1 className="text-center">{text}</h1>;
}

export default App;
