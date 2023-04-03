import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";
import ClassesPage from "./pages/ClassesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/classes" element={<ClassesPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
