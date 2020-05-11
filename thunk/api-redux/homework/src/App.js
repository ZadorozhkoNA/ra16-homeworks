import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';
import './App.css';
// import ServiceAddClassBased from './components/ServiceAddClassBased';
// import ServiceListClassBased from './components/ServiceListClassBased';

function App() {
  return (
    <div className='App-box'>
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
      {/* <hr />
      <ServiceAddClassBased />
      <ServiceListClassBased /> */}
    </div>
  );
}

export default App;
