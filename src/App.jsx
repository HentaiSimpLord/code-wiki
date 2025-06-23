import { useState } from "react";
import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";

import { Homepage } from "./pages/homepage";
import { Searchpage } from "./pages/searchpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Searchpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
