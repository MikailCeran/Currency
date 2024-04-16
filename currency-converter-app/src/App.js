import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Converter, pageTitle as ConverterTitle } from './Converter';
import { About, pageTitle as AboutTitle } from './About';
import { LiveExchanges, pageTitle as LiveExchangesTitle } from './LiveExchanges';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <header className="app-header">
            <h1>Currency Converter</h1>
            <nav className='navbar'>
              <ul>
                <li>
                  <Link to="/">Converter</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/liveexchanges">LiveExchanges</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Converter />} />
              <Route path="/about" element={<About />} />
              <Route path="/liveexchanges" element={<LiveExchanges />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <div className="footer-content">
              <h2>Contact Us</h2>
              <p>
                For any inquiries or feedback, feel free to reach out to us at{' '}
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
              <p>&copy; 2024 Currency Converter App. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
