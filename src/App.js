
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import News setProgress={this.setProgress} from './components/News setProgress={this.setProgress}';
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pagesize = 10

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress:progress})
  }

  render() {
    return (

      <div>


        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress= {this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pagesize} category={"general"} country={"us"} />}></Route>
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={this.pagesize} category={"business"} country={"us"} />}></Route>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={this.pagesize} category={"entertainment"} country={"us"} />}></Route>
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pagesize} category={"general"} country={"us"} />}></Route>
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pagesize} category={"health"} country={"us"} />}></Route>
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={this.pagesize} category={"science"} country={"us"} />}></Route>
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={this.pagesize} category={"sports"} country={"us"} />}></Route>
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={this.pagesize} category={"technology"} country={"us"} />}></Route>


          </Routes>


        </Router>
      </div>
    )
  }
}



