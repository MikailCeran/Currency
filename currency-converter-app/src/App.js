import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
<<<<<<< HEAD
import { Converter, } from './Converter';
import { About, pageTitle as AboutTitle } from './About';
import { LiveExchanges, pageTitle as LiveExchangesTitle } from './LiveExchanges';

=======
import { Converter, pageTitle } from './Converter';
import { About } from './About';
import { LiveExchanges } from './LiveExchanges';
>>>>>>> 86b48edffe29de43f3cdaa9cb21333e71ec54594
import './App.css';

function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 86b48edffe29de43f3cdaa9cb21333e71ec54594
    </Provider>
  );
}

<<<<<<< HEAD
=======
function Title({ text }) {
  return <h1 className="text-center">{text}</h1>;
}

>>>>>>> 86b48edffe29de43f3cdaa9cb21333e71ec54594
export default App;
