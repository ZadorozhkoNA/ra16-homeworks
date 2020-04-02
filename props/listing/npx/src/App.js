import React from 'react';
import Listing from './components/Listing';
import {data} from './components/data';
import './App.css';
import './main.css';

function App( ) {
  return (
    <Listing data={data} />
  );
}

export default App;
