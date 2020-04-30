import React, {useState, useEffect} from 'react';
import Details from './Details';

export default function List(props) {

    const [usersList, setUsersList] = useState([]);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(props.urlUsers)
        .then((response) => {
          return response.json();
        })
        .then((array) => {
          setUsersList(array);
        });
    }, [])

    const handleUserId = (info) => {
        setUserInfo([info]);
    }

    return (
        <>
        <ul className='List-list'>
            {usersList.map(item => 
                <li className='List-item' key={item.id} onClick={()=>(handleUserId(item))}>
                    {item.name}
                </li>
            )}
        </ul>
        { typeof(userInfo) === 'undefined' ? null : <Details info={userInfo[0]} />}
        </>
    )
}
