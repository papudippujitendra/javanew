import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import VerifyPhone from './components/VerifyPhone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<VerifyPhone />} />
      </Routes>
    </Router>
  );
}

export default App;
