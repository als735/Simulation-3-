import React, {Component} from 'react'; 
import { BrowserRouter as Router} from "react-router-dom";
// import axios from 'axios'; 
import './App.css';
import Routes from './Routes'; 
import { Provider } from 'react-redux';
import store from './Ducks/store';



class App extends Component {
 
  render() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">  
          {Routes}
        </div>
      </Router>
    </Provider>
    );
  } 
} 


export default App;
