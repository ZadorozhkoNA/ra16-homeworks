import React, {useEffect, useState} from 'react';

export default function Details(props) {

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
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`)
        .then((response) => {
            return response.json();       
        })
        .then((obj) => {
          setUser(obj);
        })
    }, [props.info.id])

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
