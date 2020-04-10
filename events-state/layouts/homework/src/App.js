import React from 'react';
import {products} from './components/products';
import Store from './components/Store';
import './components/styl.css';
import './App.css';

function App() {

  return (
    // <Store props={products} /> 
    <Store products={products} /> 
    );
}

export default App;
