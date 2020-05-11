import React, {useState} from 'react';
import List from './components/List';
import Details from './components/Details';
import './App.css';
import './components/style.css';

const urlUsers = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
const urlDetails = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'

function App() {

  const [userInfo, setUserInfo] = useState();

  const handleUserId = (info) => {
    setUserInfo({id: info.id, name: info.name});
}
  return (
    <div className='App-box'>
      <List urlUsers={urlUsers} handleUserId = {handleUserId}/>
      {typeof(userInfo) === 'undefined'  ? null : <Details urlDetails = {urlDetails} userInfo={userInfo}/>}
    </div>
  );
}

export default App;
