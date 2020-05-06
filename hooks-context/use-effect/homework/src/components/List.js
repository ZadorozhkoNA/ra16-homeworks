import React, {useState, useEffect, useContext} from 'react';
import ListContext from '../context/ListContext';

export default function List() {

    const [usersList, setUsersList] = useState([]);
    const {urlUsers, handleUserId} = useContext(ListContext);

    useEffect(() => {
        fetch(urlUsers)
        .then((response) => {
          return response.json();
        })
        .then((array) => {
          setUsersList(array);
        });
    }, [])

    return (
        <ul className='List-list'>
            {usersList.map(item => 
                <li className='List-item' key={item.id} onClick={()=>(handleUserId(item))}>
                    {item.name}
                </li>
            )}
        </ul>
    )
}
