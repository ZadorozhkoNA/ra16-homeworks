import React from 'react';
import List from './components/List';
import './App.css';
import './components/style.css';

const urlUsers = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

function App() {
  return (
    <div className='App-box'>
      <List urlUsers={urlUsers} />
    </div>
  );
}

export default App;
