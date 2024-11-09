import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandPage from './Pages/LandPage.jsx';
import Register from './Pages/Register.jsx';
import Footer from './Components/Footer.jsx';
import "./Components/Styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
