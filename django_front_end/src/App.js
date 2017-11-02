import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//***********import necesary component ***********//
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'





class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>


      

       {/* add this */}
      {this.props.children}
       <Footer/>
      </div>
    );
  }
}

export default App;
