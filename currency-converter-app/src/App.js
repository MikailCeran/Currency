import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Converter from './Converter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Converter</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Converter />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

function Header() {
  return <h1>Currency Converter</h1>;
}

export default App;
