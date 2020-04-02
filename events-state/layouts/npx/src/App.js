import React from 'react';
import Store from './components/Store';
import {products} from './components/data';
import './App.css';


function App() {
  
  return (
    <Store props={products}/>
  );
}

export default App;
