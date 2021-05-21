import React from "react";
import "./app.css";
import MainContainer from "./containers/MainContainer.jsx";
import { HashRouter as Router } from 'react-router-dom';



function App() {

  return (
  <Router>
    <div className="app">
      <MainContainer />
    </div>
  </Router>
  )
}

export default App;
