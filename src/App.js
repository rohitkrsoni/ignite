import React from "react";

// Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

// Styles
import GlobalStyles from "./components/GlobalStyles";

// Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
//  Install packeges npm install redux react-redux react-router-dom styled-components framer-motion redux-thunk
