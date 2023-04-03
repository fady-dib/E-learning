import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
