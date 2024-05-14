import "../styles/App.css";
import Layout from "./Layout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "../pages/Home";

function App() {
  useEffect(() => {
    document.title = "BBocr";
  }, []);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
