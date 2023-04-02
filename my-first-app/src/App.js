import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Layout from "./components/layout/index";

import "./styles.scss";

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
