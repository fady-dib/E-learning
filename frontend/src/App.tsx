import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
