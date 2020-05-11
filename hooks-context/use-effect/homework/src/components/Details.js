import React, {useEffect, useState} from 'react';

export default function Details(props) {

    const [user, setUser] = useState({
        id: null,
        name: '',
        avatar: '',
        details: {
            city: '',
            company: '',
            position: '',
        }
    });

    useEffect(() => {
        fetch(`${props.urlDetails}${props.userInfo.id}.json`)
        .then((response) => {
            return response.json();       
        })
        .then((obj) => {
          setUser(obj);
        })
    }, [props.userInfo])

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
