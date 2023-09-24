import { useAccount } from 'wagmi';
import './App.css';
import './static/css/navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Content } from './components';
import { Lend } from './pages';
import { Borrow } from './pages';
import { Portfolio } from './pages';

export function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <div>
                <Navbar /> <Content />
              </div>
            }
          />
          <Route
            path="/lend"
            element={
              <div>
                <Navbar />
                <Lend />
              </div>
            }
          />
          <Route
            path="/borrow"
            element={
              <div>
                <Navbar />
                <Borrow />{' '}
              </div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <div>
                <Navbar /> <Portfolio />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
