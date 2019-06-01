import React, {Component} from 'react'; 
import { BrowserRouter as Router} from "react-router-dom";
// import axios from 'axios'; 
import './App.css';
import Routes from './Routes'; 


class App extends Component {
 
  render() {
  return (
    <Router>
      <div className="App">  
        {Routes}
      </div>
    </Router>
    );
  } 
} 


export default App;
