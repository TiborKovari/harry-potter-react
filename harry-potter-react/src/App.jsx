import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Header from "./components/Header";
import Spells from "./pages/Spells";
import Houses from "./pages/Houses";
import HouseDetails from "./pages/HouseDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/characters" element={<Characters />} />
        <Route path={`/houses/:id`} element={< HouseDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
