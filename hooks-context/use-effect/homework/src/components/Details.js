import React, {useEffect, useState, useContext} from 'react';
import DetailsContext from '../context/DetailsContext';

export default function Details() {

    const {urlDetails, userInfo} = useContext(DetailsContext);
    const [user, setUser] = useState({
        id: 0,
        name: '',
        avatar: '',
        details: {
            city: '',
            company: '',
            position: '',
        }
    });

    useEffect(() => {
        fetch(`${urlDetails}${userInfo}.json`)
        .then((response) => {
            return response.json();       
        })
        .then((obj) => {
          setUser(obj);
        })
    }, [userInfo])

    return (
        <div>
            <img src={user.avatar}  alt={''}/>
            <h2 className='Details-name'>{user.name}</h2>
            <div>{`City: ${user.details.city}`}</div>
            <div>{`Company: ${user.details.company}`}</div>
            <div>{`Position: ${user.details.position}`}</div>
        </div>
    )
}
