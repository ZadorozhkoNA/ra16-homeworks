import React, {useState} from 'react';
import List from './components/List';
import Details from './components/Details';
import './App.css';
import './components/style.css';
import ListContext from './context/ListContext';
import DetailsContext from './context/DetailsContext';

const urlUsers = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
const urlDetails = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'

function App() {

  const [userInfo, setUserInfo] = useState();

  const handleUserId = (info) => {
    setUserInfo(info.id);
}

  return (
    <div className='App-box'>
      <ListContext.Provider value={{urlUsers, handleUserId}}>
        <List />
        <DetailsContext.Provider value={{urlDetails, userInfo}}>
          {typeof(userInfo) === 'undefined' ? null : <Details />}
        </DetailsContext.Provider>
      </ListContext.Provider>
    </div>
  );
}

export default App;
