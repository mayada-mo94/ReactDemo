import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Details } from "./components/detailsPage"
import { Home } from "./components/homePage"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
class App extends React.Component {



  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/details/:name" element={<Details />}/>
          </Routes>
        </div>
      </Router>
    );
  }

}

//"https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=88J_P25qB9jzsaSL57Rwx_Hux2fYAQNI"
export default App;
