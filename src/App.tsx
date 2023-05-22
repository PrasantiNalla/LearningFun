import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { LandingPage } from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/maths" element={<HomePage />} />
        <Route path="/english" element={<HomePage />} />
        <Route path="/science" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
