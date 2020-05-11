import React, {useState, useEffect} from 'react';

export default function List(props) {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch(props.urlUsers)
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
                <li className='List-item' key={item.id} onClick={()=>(props.handleUserId(item))}>
                    {item.name}
                </li>
            )}
        </ul>
    )
}
