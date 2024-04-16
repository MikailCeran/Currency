import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import af router-komponenter fra react-router-dom
import { Provider } from 'react-redux'; // Import af Provider fra react-redux
import { store } from './store'; // Import af Redux store
import { Converter, pageTitle as ConverterTitle } from './Converter'; // Import af Converter komponenten og sidetitlen
import { About, pageTitle as AboutTitle } from './About'; // Import af About komponenten og sidetitlen
import { LiveExchanges, pageTitle as LiveExchangesTitle } from './LiveExchanges'; // Import af LiveExchanges komponenten og sidetitlen
import { Contact, pageTitle as contact } from './Contact'; // Import af Contact komponenten og sidetitlen
import './App.css'; // Import af CSS-styling

// Hovedkomponent for hele applikationen
function App() {
  return (
    <Provider store={store}> {/* Wrapper for at give Redux store adgang til komponenterne */}
      <Router> {/* Router komponent til navigation */}
        <div className="app-container">
          {/* Header med titel og navigation */}
          <header className="app-header">
            <h1>Currency Converter</h1>
            <nav className='navbar'>
              <ul>
                {/* Links til forskellige sider */}
                <li>
                  <Link to="/">Converter</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/liveexchanges">LiveExchanges</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Main indhold med routing */}
          <main className="app-main">
            <Routes>
              {/* Routes for forskellige sider */}
              <Route path="/" element={<Converter />} />
              <Route path="/about" element={<About />} />
              <Route path="/liveexchanges" element={<LiveExchanges />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer med kontaktoplysninger og copyright */}
          <footer className="app-footer">
            <div className="footer-content">
              <p>
                For any inquiries or feedback, feel free to reach out to us at{' '}
                <a href="mailto:info@example.com">mika2055@edu.zealand.dk</a>
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
