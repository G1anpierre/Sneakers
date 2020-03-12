import React from 'react';

import ProductImage from './components/ProductImage'
import logo from './logo.svg';
import './App.css';



function App(props) {
  console.log(props.inventory.bySize);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Here will come my customize product</h1>
        < ProductImage />
      </header>
    </div>
  );
}

export default App;
