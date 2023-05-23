import './App.css';
import { English } from './components/English/English';
import { HomePage } from './components/HomePage/HomePage';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Maths } from './components/Maths/Maths';
import { Science } from './components/Science/Science';
import { Arts } from './components/Arts/Arts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/english" element={<English />} />
        <Route path="/science" element={<Science />} />
        <Route path="/arts" element={<Arts />} />
      </Routes>
    </Router>
  );
}

export default App;
