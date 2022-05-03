import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beers from "./pages/Beers";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
