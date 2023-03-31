import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.NEWS_APP_API_KEY || "e76ea86bf41d450d92cf47a849d40eb4"
  state = {progress:0}

  //passing value from chlid to parent
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} api={this.apiKey} key="general" pageSize={this.pageSize} country={"in"} category={"general"} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} api={this.apiKey} key="business" pageSize={this.pageSize} country={"in"} category={"business"} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} api={this.apiKey} key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"} />} />
            {/* <Route exact path="/general" element={<News setProgress={this.setProgress} api={this.api} key="general" pageSize={this.pageSize} country={"in"} category={"general"} />} /> */}
            <Route exact path="/health" element={<News setProgress={this.setProgress} api={this.apiKey} key="health" pageSize={this.pageSize} country={"in"} category={"health"} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} api={this.apiKey} key="science" pageSize={this.pageSize} country={"in"} category={"science"} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} api={this.apiKey} key="sports" pageSize={this.pageSize} country={"in"} category={"sports"} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} api={this.apiKey} key="technology" pageSize={this.pageSize} country={"in"} category={"technology"} />} />
          </Routes>
        </Router>
      </>
    )
  }
}


