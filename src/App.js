import React, {Component} from 'react'; 
import axios from 'axios'; 
import './App.css';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';




function App() {
  return (
    <div className="App">
      <Auth/>
      <Dashboard/>
      <Form/>
      <Nav/>
      <Post/>
    </div>
  );
}

export default App;
