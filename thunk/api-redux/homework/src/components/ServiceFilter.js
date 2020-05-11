import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeFilterList} from '../actions/actionCreators';

export default function ServiceFiltr() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleChange = event => {
        event.preventDefault();
		const value = event.target.value;
		dispatch(changeFilterList(items, value));
    }

    useEffect(() => {
        dispatch(changeFilterList(items, ''));
      });

    return (
        <div className='ServiceFiltr-box'>
            <label htmlFor='filter'>Filter (enter text)</label>
            <input name='filter' onChange={handleChange} />
        </div>
    )
}
