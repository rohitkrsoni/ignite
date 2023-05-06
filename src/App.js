import React from "react";
import { Route, Routes } from "react-router-dom";

// Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
//  Install packeges npm install redux react-redux react-router-dom styled-components framer-motion redux-thunk
