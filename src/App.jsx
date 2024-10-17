import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import BinanceChart from "./pages/chart";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BinanceChart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
