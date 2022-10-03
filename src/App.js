
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";

export default class App extends Component {
  pagesize = 10
  render() {
    return (
      
      <div>
        
        
        <Router>
        <Navbar/>

        <Routes>
            <Route path="/" element={<News key="general" pagesize={this.pagesize} category={"general"} country={"us"}/>}></Route>
            <Route path="/business" element={<News key="business" pagesize={this.pagesize} category={"business"} country={"us"}/>}></Route>
            <Route path="/entertainment" element={<News key="entertainment" pagesize={this.pagesize} category={"entertainment"} country={"us"}/>}></Route>
            <Route path="/general" element={<News key="general" pagesize={this.pagesize} category={"general"} country={"us"}/>}></Route>
            <Route path="/health" element={<News key="health" pagesize={this.pagesize} category={"health"} country={"us"}/>}></Route>
            <Route path="/science" element={<News key="science" pagesize={this.pagesize} category={"science"} country={"us"}/>}></Route>
            <Route path="/sports" element={<News key="sports" pagesize={this.pagesize} category={"sports"} country={"us"}/>}></Route>
            <Route path="/technology" element={<News key="technology" pagesize={this.pagesize} category={"technology"} country={"us"}/>}></Route>

            
        </Routes>

        
        </Router>
      </div>
    )
  }
}



